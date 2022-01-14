import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const tax = (state: State, _: Bus, __: number): Event<State> => ({
    x: state.a,
    status: {
        zero: isZero(state.a),
        negative: isNegative(state.a)
    }
})

export default tax
