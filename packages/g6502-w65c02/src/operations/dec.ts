import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'
import toByte from '../bitwise/toByte'

const dec = (_: State, bus: Bus, parameter: number): Event<State> => {
    const value = toByte(bus.read(parameter) - 1)
    bus.write(parameter, value)
    return {
        status: {
            zero: isZero(value),
            negative: isNegative(value)
        }
    }
}

export default dec
