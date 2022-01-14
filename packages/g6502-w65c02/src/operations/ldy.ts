import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const ldy = (_: State, __: Bus, parameter: number): Event<State> => ({
    y: parameter,
    status: {
        negative: isNegative(parameter),
        zero: isZero(parameter)
    }
})

export default ldy
