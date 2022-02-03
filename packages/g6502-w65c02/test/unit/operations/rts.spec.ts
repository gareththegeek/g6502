import rts from '../../../src/operations/rts'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('rts', () => {
            it('should pop and restore the program counter from the stack', () => {
                const sp = 0x81
                const pc = 0xbeef + 1

                const bus = buildBus()
                ;(bus.read as jest.Mock).mockImplementation((address: number): number => {
                    switch (address) {
                        case 0x0182:
                            return 0xef
                        case 0x0183:
                            return 0xbe
                        default:
                            return 0x00
                    }
                })

                const actual = testOperation(rts, { sp, pc: 0x1234 }, {}, 0x00, bus)

                expect(actual).toEqual(
                    expect.objectContaining({
                        pc,
                        sp: 0x83
                    })
                )
            })
        })
    })
})
