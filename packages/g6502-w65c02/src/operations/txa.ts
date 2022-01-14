import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const txa = (state: State, _: Bus, __: number): Event<State> => ({
    a: state.x,
    status: {
        zero: isZero(state.x),
        negative: isNegative(state.x)
    }
})

export default txa
