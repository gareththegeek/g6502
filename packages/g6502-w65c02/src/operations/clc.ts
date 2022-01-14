import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const clc = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: false
    }
})

export default clc
