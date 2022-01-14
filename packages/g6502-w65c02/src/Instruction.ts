export default interface Instruction {
    opcode: number
    mnemonic: string
    addressingMode: string
    size: number
    cycles: number
    read: boolean
    addPageBoundaryCycle: boolean
}
