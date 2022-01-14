import txa from '../../../src/operations/txa'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('txa', () => {
            it('should load x register into accumulator set negative and zero flags', () => {
                const actual = testOperation(txa, { a: 0x44, x: 0x33 }, { zero: true, negative: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0x33,
                        status: expect.objectContaining({
                            negative: false,
                            zero: false
                        })
                    })
                )
            })
        })
    })
})
