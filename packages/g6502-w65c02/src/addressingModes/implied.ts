import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const implied = (_: Bus, __: number[], ___: DataRegisters): AddressingModeResult => ({
    parameter: 0
})

export default implied
