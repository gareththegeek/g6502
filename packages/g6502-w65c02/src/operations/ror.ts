import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const ror = (state: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.read(parameter)
    const next = (current >> 1) | (state.status.carry ? 0x80 : 0x00)
    bus.write(parameter, next)
    return {
        status: {
            zero: isZero(next),
            negative: state.status.carry,
            carry: isBitZeroSet(current)
        }
    }
}

export default ror
