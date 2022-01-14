import eor from '../../../src/operations/eor'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('eor', () => {
            it('should bitwise exclusive or parameter with accumulator and set negative and zero flags', () => {
                const actual = testOperation(eor, { a: 0xf0 }, {}, 0xaa)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x5a,
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
