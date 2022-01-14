import cli from '../../../src/operations/cli'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('cli', () => {
            it('should clear interrupt disable flag without affecting other state', () => {
                const actual = testOperation(cli, {}, { irqDisable: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        status: expect.objectContaining({
                            irqDisable: false
                        })
                    })
                )
            })
        })
    })
})
