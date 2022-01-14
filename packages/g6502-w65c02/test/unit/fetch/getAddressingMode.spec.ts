import getAddressingMode from '../../../src/fetch/getAddressingMode'
import { Bus } from 'g6502-interfaces'
import DataRegisters from '../../../src/DataRegisters'
import * as addressingModeTableUnit from '../../../src/addressingModes/addressingModeTable'

describe('Unit', () => {
    describe('6502', () => {
        describe('getAddressingMode', () => {
            let getAddressingModeTable: jest.SpyInstance

            beforeEach(() => {
                getAddressingModeTable = jest.spyOn(addressingModeTableUnit, 'getAddressingModeTable')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should return the result of the addressing mode matching the requested type', () => {
                const expected = {
                    parameter: 8
                }
                const expectedStub = jest.fn()
                expectedStub.mockReturnValue(expected)
                const unexpectedStub = jest.fn()
                const table = {
                    expected: expectedStub,
                    unexpected: unexpectedStub
                }
                getAddressingModeTable.mockReturnValue(table)

                const bus = {} as Bus
                const operand = [0]
                const registers = {} as DataRegisters

                const uut = getAddressingMode
                const actual = uut(bus, 'EXPECTED', operand, registers, true)

                expect(actual).toBe(expected)
                expect(expectedStub).toHaveBeenCalledWith(bus, operand, registers)
            })
        })
    })
})
