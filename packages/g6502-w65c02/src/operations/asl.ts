import { Event } from 'g6502-interfaces'
import { Bus } from 'g6502-interfaces'
import State from '../State'
import toByte from '../bitwise/toByte'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const asl = (_: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.read(parameter)
    const next = toByte(current << 1)
    bus.write(parameter, next)
    return {
        status: {
            negative: isNegative(next),
            zero: isZero(next),
            carry: isNegative(current)
        }
    }
}

export default asl
