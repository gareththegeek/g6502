import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import boolToByte from '../bitwise/boolToByte'
import toByte from '../bitwise/toByte'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'
import isOverflow from '../bitwise/isOverflow'

const adc = (state: State, _: Bus, parameter: number): Event<State> => {
    const carry = boolToByte(state.status.carry)
    const next16 = state.a + parameter + carry
    const next8 = toByte(next16)
    return {
        a: next8,
        status: {
            zero: isZero(next8),
            negative: isNegative(next8),
            overflow: isOverflow(state.a /*+ carry*/, parameter, next16),
            carry: next16 > 0xff
        }
    }
}

export default adc
