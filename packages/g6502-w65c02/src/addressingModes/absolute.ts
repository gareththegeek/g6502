import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'

const absolute = (_: Bus, operand: number[], __: DataRegisters): AddressingModeResult => ({
    parameter: littleEndian(operand)
})

export default absolute
