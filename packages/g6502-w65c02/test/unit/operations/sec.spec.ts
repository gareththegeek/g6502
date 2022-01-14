import sec from '../../../src/operations/sec'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('sec', () => {
            it('should set carry flag without affecting other state', () => {
                const actual = testOperation(sec, {}, { carry: false }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            carry: true
                        })
                    })
                )
            })
        })
    })
})
