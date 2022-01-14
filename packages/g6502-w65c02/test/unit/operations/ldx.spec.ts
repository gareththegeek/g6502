import ldx from '../../../src/operations/ldx'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('ldx', () => {
            it('should load parameter into x register and set negative and zero flags', () => {
                const actual = testOperation(ldx, {}, {}, 0x80)

                expect(actual).toEqual(
                    expect.objectContaining({
                        x: 0x80,
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
