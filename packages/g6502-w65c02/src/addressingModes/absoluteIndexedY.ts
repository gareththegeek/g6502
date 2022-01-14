import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import isPageCrossed from '../bitwise/isPageCrossed'
import toWord from '../bitwise/toWord'

const absoluteIndexedY = (_: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    const base = littleEndian(operand)
    return {
        parameter: toWord(base + registers.y),
        pageBoundaryCrossed: isPageCrossed(base, registers.y)
    }
}

export default absoluteIndexedY
    