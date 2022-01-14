import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import getStackAddress from '../bitwise/getStackAddress'
import highByte from '../bitwise/highByte'
import lowByte from '../bitwise/lowByte'

const jsr = (state: State, bus: Bus, parameter: number): Event<State> => {
    const value = state.pc - 1
    bus.write(getStackAddress(state.sp - 0), highByte(value))
    bus.write(getStackAddress(state.sp - 1), lowByte(value))
    return {
        pc: parameter,
        sp: state.sp - 2
    }
}

export default jsr
