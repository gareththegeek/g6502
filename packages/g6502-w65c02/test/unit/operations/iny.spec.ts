import iny from '../../../src/operations/iny'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('iny', () => {
            it('should increment value in y register and set negative and zero flags', () => {
                const actual = testOperation(iny, { y: 0xfd }, { negative: false, zero: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        y: 0xfe,
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
