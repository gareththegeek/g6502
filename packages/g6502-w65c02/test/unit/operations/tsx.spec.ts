import tsx from '../../../src/operations/tsx'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('tsx', () => {
            it('should load stack pointer into x register set negative and zero flags', () => {
                const actual = testOperation(tsx, { sp: 0x44, x: 0x33 }, { zero: true, negative: true }, 0x00)

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
