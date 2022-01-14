import asla from '../../../src/operations/asla'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('asla', () => {
            it('should shift data left one bit with lost bit going into carry flag', () => {
                const actual = testOperation(asla, {}, {}, 0xaa)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x54,
                        status: expect.objectContaining({
                            negative: false,
                            zero: false,
                            carry: true
                        })
                    })
                )
            })
        })
    })
})
