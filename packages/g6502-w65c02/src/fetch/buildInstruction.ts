import Instruction from '../Instruction'

const buildInstruction = (
    opcode: number,
    mnemonic: string,
    addressingMode: string,
    size: number,
    cycles: number,
    read: boolean,
    addPageBoundaryCycle = false
): Instruction => ({
    opcode,
    mnemonic,
    addressingMode,
    size,
    cycles,
    read,
    addPageBoundaryCycle
})

export default buildInstruction
