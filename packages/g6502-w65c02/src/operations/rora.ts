import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const rora = (state: State, _: Bus, parameter: number): Event<State> => {
    const next = (parameter >> 1) | (state.status.carry ? 0x80 : 0x00)
    return {
        a: next,
        status: {
            zero: isZero(next),
            negative: state.status.carry,
            carry: isBitZeroSet(parameter)
        }
    }
}

export default rora
