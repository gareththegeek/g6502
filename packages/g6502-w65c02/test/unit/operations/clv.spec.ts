import clv from '../../../src/operations/clv'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('clv', () => {
            it('should clear overflow flag without affecting other state', () => {
                const actual = testOperation(clv, {}, { overflow: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            overflow: false
                        })
                    })
                )
            })
        })
    })
})
