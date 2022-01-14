import and from '../../../src/operations/and'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('and', () => {
            it('should bitwise and parameter with accumulator and set negative and zero flags', () => {
                const actual = testOperation(and, { a: 0xf0 }, {}, 0x3c)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x30,
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
