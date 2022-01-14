import cpx from '../../../src/operations/cpx'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('cpx', () => {
            it('should set the zero and carry flags and clear the negative flag if the x register and parameter are equal', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { zero: false, carry: false, negative: true }, 0x53)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            zero: true,
                            carry: true,
                            negative: false
                        })
                    })
                )
            })

            it('should clear the zero flag if the x register and parameter are not equal', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { zero: true }, 0x52)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            zero: false
                        })
                    })
                )
            })

            it('should set the carry flag if the x register is greater than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { carry: false }, 0x52)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            carry: true
                        })
                    })
                )
            })

            it('should clear the carry flag if the x register is less than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { carry: true }, 0x54)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            carry: false
                        })
                    })
                )
            })

            it('should set the negative flag if the x register is less than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { negative: false }, 0x54)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            negative: true
                        })
                    })
                )
            })

            it('should clear the negative flag if the x register is greater than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x55 }, { negative: true }, 0x54)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            negative: false
                        })
                    })
                )
            })
        })
    })
})
