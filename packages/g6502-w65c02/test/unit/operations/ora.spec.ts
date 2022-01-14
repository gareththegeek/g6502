import ora from '../../../src/operations/ora'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('ora', () => {
            it('should bitwise or parameter with accumulator and set negative and zero flags', () => {
                const actual = testOperation(ora, { a: 0x55 }, {}, 0xaa)

                expect(actual).toEqual(
                    expect.objectContaining({
                        a: 0xff,
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
