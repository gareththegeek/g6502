import bit from '../../../src/operations/bit'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('bit', () => {
            it('should set the zero flag if accumulator bitwise and parameter is zero', () => {
                const actual = testOperation(bit, { a: 0xaa }, { zero: false }, 0x55)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            zero: true
                        })
                    })
                )
            })

            it('should set the overflow flag to bit 6 of the parameter', () => {
                const actual = testOperation(bit, { a: 0x40 }, { overflow: false, negative: false }, 0x40)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            zero: false,
                            overflow: true,
                            negative: false
                        })
                    })
                )
            })

            it('should set the negative flag to bit 7 of the parameter', () => {
                const actual = testOperation(bit, { a: 0x80 }, { overflow: false, negative: false }, 0x80)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            zero: false,
                            overflow: false,
                            negative: true
                        })
                    })
                )
            })
        })
    })
})
