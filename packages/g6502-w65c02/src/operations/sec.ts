import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const sec = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: true
    }
})

export default sec
