import sei from '../../../src/operations/sei'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('sei', () => {
            it('should set interrupt disable flag without affecting other state', () => {
                const actual = testOperation(sei, {}, { irqDisable: false }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            irqDisable: true
                        })
                    })
                )
            })
        })
    })
})
