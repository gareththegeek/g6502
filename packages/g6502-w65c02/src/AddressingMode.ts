import { Bus } from 'g6502-interfaces'
import DataRegisters from './DataRegisters'
import AddressingModeResult from './AddressingModeResult'

type AddressingMode = (bus: Bus, operand: number[], registers: DataRegisters) => AddressingModeResult

export default AddressingMode
