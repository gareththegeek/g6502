import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const ora = (state: State, _: Bus, parameter: number): Event<State> => {
    const a = state.a | parameter
    return {
        a,
        status: {
            negative: isNegative(a),
            zero: isZero(a)
        }
    }
}

export default ora
