import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'
import isByte from '../bitwise/isByte'

const zeroPageIndexedY = (_: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    if (!isByte(operand)) {
        throw new Error(`Expected byte but got ${operand}`)
    }

    return {
        parameter: toByte(operand[0] + registers.y)
    }
}

export default zeroPageIndexedY
