import tya from '../../../src/operations/tya'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('tya', () => {
            it('should load y register into accumulator set negative and zero flags', () => {
                const actual = testOperation(tya, { a: 0x44, y: 0x33 }, { zero: true, negative: true }, 0x00)

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
