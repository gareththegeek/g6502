import lda from '../../../src/operations/lda'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('lda', () => {
            it('should load parameter into accumulator and set negative and zero flags', () => {
                const actual = testOperation(lda, {}, {}, 0x80)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x80,
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
