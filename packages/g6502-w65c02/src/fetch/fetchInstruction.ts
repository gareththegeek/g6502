import { Bus } from 'g6502-interfaces'
import Instruction from '../Instruction'
import { getInstructionTable } from './instructionTable'

const fetchInstruction = (bus: Bus, address: number): Instruction => {
    const opcode = bus.read(address)
    const table = getInstructionTable()

    if (!(opcode in table)) {
        return table[0x00] as Instruction
    }

    const result = table[opcode]
    if (result === undefined) {
        throw new Error(`Could not find opcode and failed to map to BRK ${opcode}`)
    }

    return result
}

export default fetchInstruction
