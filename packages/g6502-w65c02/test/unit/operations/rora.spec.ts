import rora from '../../../src/operations/rora'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('rora', () => {
            it('should shift data right one bit with carry flag going into high bit and lost bit going into carry flag', () => {
                const actual = testOperation(rora, {}, { carry: true }, 0x55)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0xaa,
                        status: expect.objectContaining({
                            negative: true,
                            zero: false,
                            carry: true
                        })
                    })
                )
            })

            it('should shift data right one bit with unset carry flag going into high bit as zero', () => {
                const actual = testOperation(rora, {}, { carry: false }, 0x54)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x2a,
                        status: expect.objectContaining({
                            negative: false,
                            zero: false,
                            carry: false
                        })
                    })
                )
            })
        })
    })
})
