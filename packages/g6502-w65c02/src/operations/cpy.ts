import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isNegative from '../bitwise/isNegative'

const cpy = (state: State, _: Bus, parameter: number): Event<State> => ({
    status: {
        zero: state.y === parameter,
        carry: state.y >= parameter,
        negative: isNegative(state.y - parameter)
    }
})

export default cpy
