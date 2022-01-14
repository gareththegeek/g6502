import tax from '../../../src/operations/tax'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('tax', () => {
            it('should load accumulator into x register set negative and zero flags', () => {
                const actual = testOperation(tax, { a: 0x44, x: 0x33 }, { zero: true, negative: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        x: 0x44,
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
