import pla from '../../../src/operations/pla'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('pla', () => {
            it('should load data at stack pointer into accumulator, increment stack pointer and set negative and zero flags', () => {
                const bus = buildBus()
                bus.read.mockReturnValue(0x93)

                const actual = testOperation(pla, { a: 0x54, sp: 0x87 }, { zero: true, negative: false }, 0x00, bus)

                expect(bus.read).toHaveBeenCalledWith(0x0188)
                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x93,
                        sp: 0x88,
                        status: expect.objectContaining({
                            negative: true,
                            zero: false
                        })
                    })
                )
            })
        })
    })
})
