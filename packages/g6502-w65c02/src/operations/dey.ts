import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import toByte from '../bitwise/toByte'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const dey = (state: State, _: Bus, __: number): Event<State> => {
    const next = toByte(state.y - 1)
    return {
        y: next,
        status: {
            zero: isZero(next),
            negative: isNegative(next)
        }
    }
}

export default dey
