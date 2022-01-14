import clc from '../../../src/operations/clc'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('clc', () => {
            it('should clear carry flag without affecting other state', () => {
                const actual = testOperation(clc, {}, { carry: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            carry: false
                        })
                    })
                )
            })
        })
    })
})
