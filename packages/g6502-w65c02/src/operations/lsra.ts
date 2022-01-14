import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const lsra = (_: State, __: Bus, parameter: number): Event<State> => {
    const next = parameter >> 1
    return {
        a: next,
        status: {
            zero: isZero(next),
            negative: false,
            carry: isBitZeroSet(parameter)
        }
    }
}

export default lsra
