import dey from '../../../src/operations/dey'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('dey', () => {
            it('should decrement value in y register and set negative and zero flags', () => {
                const actual = testOperation(dey, { y: 0x00 }, { negative: false, zero: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        y: 0xff,
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
