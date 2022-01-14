import rola from '../../../src/operations/rola'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('rola', () => {
            it('should shift data left one bit with carry flag going into low bit and lost bit going into carry flag', () => {
                const actual = testOperation(rola, {}, { carry: true }, 0xd5)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0xab,
                        status: expect.objectContaining({
                            negative: true,
                            zero: false,
                            carry: true
                        })
                    })
                )
            })
        })
    })
})
