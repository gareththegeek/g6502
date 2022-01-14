import inx from '../../../src/operations/inx'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('inx', () => {
            it('should increment value in x register and set negative and zero flags', () => {
                const actual = testOperation(inx, { x: 0xfd }, { negative: false, zero: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        x: 0xfe,
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
