import lsra from '../../../src/operations/lsra'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('lsra', () => {
            it('should shift data right one bit with lost bit going into carry flag', () => {
                const actual = testOperation(lsra, {}, {}, 0x55)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x2a,
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
