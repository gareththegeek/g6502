import { buildInterruptEvent } from '../../../src/events/buildInterruptEvent'
import { build6502State, buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('buildInterruptEvent', () => {
            it('should push the program counter and status register to the stack', () => {
                const bus = buildBus()
                const previous = build6502State()
                previous.pc = 0x1234
                previous.sp = 0xff
                previous.status = {
                    carry: false,
                    zero: true,
                    irqDisable: false,
                    decimal: true,
                    break: false,
                    overflow: false,
                    negative: true
                }

                const uut = buildInterruptEvent
                const actual = uut(previous, bus, 0x8765, 0x30)

                expect(bus.write.mock.calls[0]![0]).toEqual(0x01ff)
                expect(bus.write.mock.calls[0]![1]).toEqual(0x12)

                expect(bus.write.mock.calls[1]![0]).toEqual(0x01fe)
                expect(bus.write.mock.calls[1]![1]).toEqual(0x34)

                expect(bus.write.mock.calls[2]![0]).toEqual(0x01fd)
                expect(bus.write.mock.calls[2]![1]).toEqual(0xba)

                expect(actual.sp).toBe(0xfc)
            })

            it('should set the program counter to the addressed stored by the specified vector', () => {
                const vector = 0x4545
                const bus = buildBus()
                bus.read.mockImplementation((address: number): number => {
                        switch (address) {
                            case vector + 0:
                                return 0x65
                            case vector + 1:
                                return 0x87
                            default:
                                return 0x00
                        }
                    })
                const previous = build6502State()
                previous.pc = 0x1234
                previous.sp = 0xff

                const uut = buildInterruptEvent
                const actual = uut(previous, bus, vector, 0)

                expect(actual.pc).toBe(0x8765)
            })

            it('should set disable interrupt flag and clear the irq and nmi flags', () => {
                const bus = buildBus()
                const previous = build6502State()
                previous.irq = true
                previous.nmi = true
                previous.pc = 0x1234
                previous.sp = 0xff

                const uut = buildInterruptEvent
                const actual = uut(previous, bus, 0x4343, 0)

                expect(actual.status!.irqDisable).toBe(true)
                expect(actual.irq).toBe(false)
                expect(actual.nmi).toBe(false)
            })
        })
    })
})
