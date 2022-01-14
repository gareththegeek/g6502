import ldy from '../../../src/operations/ldy'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('ldy', () => {
            it('should load parameter into y register and set negative and zero flags', () => {
                const actual = testOperation(ldy, {}, {}, 0x80)

                expect(actual).toEqual(
                    expect.objectContaining({
                        y: 0x80,
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
