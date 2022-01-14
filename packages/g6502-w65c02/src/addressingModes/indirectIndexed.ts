import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import isPageCrossed from '../bitwise/isPageCrossed'
import toByte from '../bitwise/toByte'
import toWord from '../bitwise/toWord'
import isByte from '../bitwise/isByte'

const indirectIndexed = (bus: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    if (!isByte(operand)) {
        throw new Error(`Expected byte but got ${operand}`)
    }
    const indirect = operand[0]
    const lo = bus.read(indirect)
    const hi = bus.read(toByte(indirect + 1))
    const base = littleEndian([lo, hi])
    const direct = toWord(base + registers.y)
    return {
        parameter: direct,
        pageBoundaryCrossed: isPageCrossed(base, registers.y)
    }
}

export default indirectIndexed
