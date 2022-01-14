import pha from '../../../src/operations/pha'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('pha', () => {
            it('should store the value in the accumulator at the address specified by stack pointer and decrement stack pointer', () => {
                const bus = buildBus()
                const expected = 0x12

                const actual = testOperation(pha, { a: expected, sp: 0x78 }, {}, 0x00, bus)

                expect(bus.write).toHaveBeenCalledWith(0x0178, expected)
                expect(actual.sp).toBe(0x78 - 1)
            })
        })
    })
})
