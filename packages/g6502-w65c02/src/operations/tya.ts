import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const tya = (state: State, _: Bus, __: number): Event<State> => ({
    a: state.y,
    status: {
        zero: isZero(state.y),
        negative: isNegative(state.y)
    }
})

export default tya
