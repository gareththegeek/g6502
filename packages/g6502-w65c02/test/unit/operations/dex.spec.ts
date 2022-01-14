import dex from '../../../src/operations/dex'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('dex', () => {
            it('should decrement value in x register and set negative and zero flags', () => {
                const actual = testOperation(dex, { x: 0x00 }, { negative: false, zero: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        x: 0xff,
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
