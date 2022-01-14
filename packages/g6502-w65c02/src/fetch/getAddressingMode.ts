import { Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import { getAddressingModeTable } from '../addressingModes/addressingModeTable'
import AddressingModeValueResult from '../AddressingModeValueResult'

const MEMORY_ADDRESSING_MODES = ['abs', 'abs,x', 'abs,y', '(ind,x)', '(ind),y', 'zp', 'zp,x', 'zp,y']

const isMemoryAddressingMode = (mneumonic: string) => MEMORY_ADDRESSING_MODES.includes(mneumonic.toLowerCase())

const getAddressingMode = (
    bus: Bus,
    addressingModeMneumonic: string,
    operand: Array<number>,
    dataRegisters: DataRegisters,
    read: boolean
): AddressingModeValueResult => {
    const addressingMode = getAddressingModeTable()[addressingModeMneumonic.toLowerCase()]
    if (addressingMode === undefined) {
        throw new Error(`Unknown addressing mode ${addressingModeMneumonic.toLowerCase()}`)
    }

    const result = addressingMode(bus, operand, dataRegisters)

    if (read && isMemoryAddressingMode(addressingModeMneumonic)) {
        result.value = bus.read(result.parameter)
    } else {
        result.value = result.parameter
    }

    return result as AddressingModeValueResult
}

export default getAddressingMode
