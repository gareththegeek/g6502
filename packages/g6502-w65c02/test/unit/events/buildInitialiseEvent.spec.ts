import { buildInitialiseEvent } from '../../../src/events/buildInitialiseEvent'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('initialise', () => {
            it('should return an initialise state for the 6502 with correct number of initialisation cycles', () => {
                const bus = buildBus()

                const uut = buildInitialiseEvent
                const actual = uut(bus)

                expect(actual.a!).toBe(0)
                expect(actual.x!).toBe(0)
                expect(actual.y!).toBe(0)
                expect(actual.sp!).toBe(0xfd)
                expect(actual.status!.carry!).toBe(false)
                expect(actual.status!.decimal!).toBe(false)
                expect(actual.status!.irqDisable!).toBe(true)
                expect(actual.status!.negative!).toBe(false)
                expect(actual.status!.overflow!).toBe(false)
                expect(actual.status!.zero!).toBe(false)
                expect(actual.initialised!).toBe(true)
                expect(actual.cycles!).toBe(6)
            })

            it('should read the initial value for the pc from addresses 0xfffc and 0fffd on the bus', () => {
                const expected = 0x1234
                const bus = buildBus()
                ;(bus.read as jest.Mock).mockImplementation((address: number): number => {
                    switch (address) {
                        case 0xfffc:
                            return 0x34
                        case 0xfffd:
                            return 0x12
                        default:
                            return 0x00
                    }
                })

                const uut = buildInitialiseEvent
                const actual = uut(bus)

                expect(actual.pc).toBe(expected)
            })
        })
    })
})
