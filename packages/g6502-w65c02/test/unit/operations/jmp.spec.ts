import jmp from '../../../src/operations/jmp'
import { testOperation } from '../../helpers/6502'

describe('Unit', () => {
    describe('6502', () => {
        describe('jmp', () => {
            it('should set program counter equal to parameter', () => {
                const actual = testOperation(jmp, { pc: 0x4321 }, {}, 0x1234)

                expect(actual).toEqual(
                    expect.objectContaining({
                        pc: 0x1234
                    })
                )
            })
        })
    })
})
