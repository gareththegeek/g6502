import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import getStatusByte from '../bitwise/getStatusByte'
import getStackAddress from '../bitwise/getStackAddress'
import toByte from '../bitwise/toByte'
import { B_PHP } from '../constants'

const php = (state: State, bus: Bus, _: number): Event<State> => {
    const value = getStatusByte(state.status) | B_PHP
    bus.write(getStackAddress(state.sp), value)
    return {
        sp: toByte(state.sp - 1)
    }
}

export default php
