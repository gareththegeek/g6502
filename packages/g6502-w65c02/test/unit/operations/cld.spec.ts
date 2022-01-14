import cld from '../../../src/operations/cld'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('cld', () => {
            it('should clear decimal flag without affecting other state', () => {
                const actual = testOperation(cld, {}, { decimal: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            decimal: false
                        })
                    })
                )
            })
        })
    })
})
