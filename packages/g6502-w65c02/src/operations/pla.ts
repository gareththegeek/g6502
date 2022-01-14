import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import getStackAddress from '../bitwise/getStackAddress'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const pla = (state: State, bus: Bus, _: number): Event<State> => {
    const next = bus.read(getStackAddress(state.sp + 1))
    return {
        a: next,
        sp: state.sp + 1,
        status: {
            zero: isZero(next),
            negative: isNegative(next)
        }
    }
}

export default pla
