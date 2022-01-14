import getOperation from '../../../src/execute/getOperation'
import Instruction from '../../../src/Instruction'
import * as operationTableUnit from '../../../src/operations/operationTable'

describe('Unit', () => {
    describe('6502', () => {
        describe('getOperation', () => {
            let getOperationTable: jest.SpyInstance

            beforeEach(() => {
                getOperationTable = jest.spyOn(operationTableUnit, 'getOperationTable')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should return the operation with the matching mnemonic', () => {
                const expected = jest.fn()
                const unexpected = jest.fn()
                const table = {
                    expected: expected,
                    unexpected: unexpected
                }
                getOperationTable.mockReturnValue(table)

                const instruction = {
                    mnemonic: 'expected'
                } as Instruction

                const uut = getOperation
                const actual = uut(instruction)

                expect(actual).toBe(expected)
            })
        })
    })
})
