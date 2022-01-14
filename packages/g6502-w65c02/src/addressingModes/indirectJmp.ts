import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'
import isWord from '../bitwise/isWord'

const indirectJmp = (bus: Bus, operand: number[], _: DataRegisters): AddressingModeResult => {
    if (!isWord(operand)) {
        throw new Error(`Expected word operand but got ${operand}`)
    }
    const addressLo = littleEndian(operand)
    const lo = bus.read(addressLo)
    // Implement jmp indirect bug
    const addressHi = littleEndian([toByte(operand[0] + 1), operand[1]])
    const hi = bus.read(addressHi)
    return {
        parameter: littleEndian([lo, hi])
    }
}

export default indirectJmp
