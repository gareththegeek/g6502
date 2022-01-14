import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const accumulator = (_: Bus, __: number[], registers: DataRegisters): AddressingModeResult => ({
    parameter: registers.a
})

export default accumulator
