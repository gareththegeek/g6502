import bne from '../../../src/operations/bne'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('bne', () => {
            it('should add parameter to program counter and increment cycles if zero status flag is not set', () => {
                const actual = testOperation(bne, { cycles: 5, pc: 0x1000 }, { zero: false }, 0x06)

                expect(actual).toEqual(
                    expect.objectContaining({
                        pc: 0x1006,
                        cycles: 6
                    })
                )
            })

            it('should not add parameter to program counter or increment cycles if zero status flag is set', () => {
                const actual = testOperation(bne, { cycles: 5, pc: 0x1000 }, { zero: true }, 0x06)

                expect(actual).toEqual(
                    expect.objectContaining({
                        pc: 0x1000,
                        cycles: 5
                    })
                )
            })

            it('should increment cycles by 2 if zero flag not set and page boundary crossed', () => {
                const actual = testOperation(bne, { cycles: 5, pc: 0x10ff }, { zero: false }, 0x01)

                expect(actual.cycles).toBe(7)
            })
        })
    })
})
