import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import toByte from '../bitwise/toByte'
import boolToByte from '../bitwise/boolToByte'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const rol = (state: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.read(parameter)
    const next = toByte(current << 1) | boolToByte(state.status.carry)
    bus.write(parameter, next)
    return {
        status: {
            negative: isNegative(next),
            zero: isZero(next),
            carry: isNegative(current)
        }
    }
}

export default rol
