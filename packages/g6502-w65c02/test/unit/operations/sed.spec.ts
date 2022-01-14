import sed from '../../../src/operations/sed'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('sed', () => {
            it('should set decimal flag without affecting other state', () => {
                const actual = testOperation(sed, {}, { decimal: false }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            decimal: true
                        })
                    })
                )
            })
        })
    })
})
