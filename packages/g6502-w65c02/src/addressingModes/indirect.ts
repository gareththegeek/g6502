import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import toWord from '../bitwise/toWord'

const indirect = (bus: Bus, operand: number[], _: DataRegisters): AddressingModeResult => {
    const address = littleEndian(operand)
    const lo = bus.read(address)
    const hi = bus.read(toWord(address + 1))
    return {
        parameter: littleEndian([lo, hi])
    }
}

export default indirect
