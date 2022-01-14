import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'
import isByte from '../bitwise/isByte'

const indexedIndirect = (bus: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    if (!isByte(operand)) {
        throw new Error(`Expected byte but got ${operand}`)
    }
    const indirect = toByte(operand[0] + registers.x)
    const lo = bus.read(indirect)
    const hi = bus.read(toByte(indirect + 1))
    const direct = littleEndian([lo, hi])
    return {
        parameter: direct
    }
}

export default indexedIndirect
