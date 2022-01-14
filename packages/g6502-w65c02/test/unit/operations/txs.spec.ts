import txs from '../../../src/operations/txs'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('txs', () => {
            it('should load x register into stack pointer set negative and zero flags', () => {
                const actual = testOperation(txs, { sp: 0x44, x: 0x33 }, { zero: true, negative: true }, 0x00)

                expect(actual).toEqual(
                    expect.objectContaining({
                        sp: 0x33
                    })
                )
            })
        })
    })
})
