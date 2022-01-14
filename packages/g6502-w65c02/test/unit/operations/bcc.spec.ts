import bcc from '../../../src/operations/bcc'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('bcc', () => {
            it('should add parameter to program counter and increment cycles if carry status flag is not set', () => {
                const actual = testOperation(bcc, { cycles: 5, pc: 0x1000 }, { carry: false }, 0x06)

                expect(actual).toEqual(
                    expect.objectContaining({
                        pc: 0x1006,
                        cycles: 6
                    })
                )
            })

            it('should not add parameter to program counter or increment cycles if carry status flag is set', () => {
                const actual = testOperation(bcc, { cycles: 5, pc: 0x1000 }, { carry: true }, 0x06)

                expect(actual).toEqual(
                    expect.objectContaining({
                        pc: 0x1000,
                        cycles: 5
                    })
                )
            })

            it('should increment cycles by 2 if carry flag not set and page boundary crossed', () => {
                const actual = testOperation(bcc, { cycles: 5, pc: 0x10ff }, { carry: false }, 0x01)

                expect(actual.cycles).toBe(7)
            })
        })
    })
})
