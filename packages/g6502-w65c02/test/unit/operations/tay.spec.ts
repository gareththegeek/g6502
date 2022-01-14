import tay from '../../../src/operations/tay'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('tay', () => {
            it('should load accumulator into y register set negative and zero flags', () => {
                const actual = testOperation(tay, { a: 0x44, y: 0x33 }, { zero: true, negative: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        y: 0x44,
                        status: expect.objectContaining({
                            negative: false,
                            zero: false
                        })
                    })
                )
            })
        })
    })
})
