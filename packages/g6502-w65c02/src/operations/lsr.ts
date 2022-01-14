import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const lsr = (_: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.read(parameter)
    const next = current >> 1
    bus.write(parameter, next)
    return {
        status: {
            zero: isZero(next),
            negative: false,
            carry: isBitZeroSet(current)
        }
    }
}

export default lsr
