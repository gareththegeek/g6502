import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'
import isByte from '../bitwise/isByte'

const immediate = (_: Bus, operand: number[], __: DataRegisters): AddressingModeResult => {
    if (!isByte(operand)) {
        throw new Error(`Expected byte but received ${operand}`)
    }

    return {
        parameter: operand[0]
    }
}

export default immediate
