import fetchInstruction from '../../../src/fetch/fetchInstruction'
import buildInstruction from '../../../src/fetch/buildInstruction'
import * as instructionTableUnit from '../../../src/fetch/instructionTable'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('fetchInstruction', () => {
            let getInstructionTable: jest.SpyInstance

            beforeEach(() => {
                getInstructionTable = jest.spyOn(instructionTableUnit, 'getInstructionTable')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should return the entry from the instruction table which matches the opcode at specified address', () => {
                const expected = buildInstruction(0x06, 'EXP', 'IMM', 1, 2, true)
                const unexpected = buildInstruction(0x00, 'UNX', 'IMM', 2, 3, true)
                const table = {
                    0x00: unexpected,
                    0x06: expected
                }
                getInstructionTable.mockReturnValue(table)

                const expectedAddress = 0x123
                const bus = buildBus()
                ;(bus.read as jest.Mock).mockReturnValue(expected.opcode)

                const uut = fetchInstruction
                const actual = uut(bus, expectedAddress)

                expect(bus.read).toHaveBeenCalledWith(expectedAddress)
                expect(actual).toEqual(expected)
            })

            it('should return zero instruction if invalid opcode is located at specified adderss', () => {
                const expected = buildInstruction(0x00, 'EXP', 'IMM', 1, 2, true)
                const unexpected = buildInstruction(0x06, 'UNX', 'IMM', 2, 3, true)
                const table = {
                    0x00: expected,
                    0x06: unexpected
                }
                getInstructionTable.mockReturnValue(table)

                const expectedAddress = 0x123
                const bus = buildBus()
                ;(bus.read as jest.Mock).mockReturnValue(expected.opcode + 1)

                const uut = fetchInstruction
                const actual = uut(bus, expectedAddress)

                expect(bus.read).toHaveBeenCalledWith(expectedAddress)
                expect(actual).toEqual(expected)
            })
        })
    })
})
