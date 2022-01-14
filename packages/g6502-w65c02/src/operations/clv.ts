import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const clv = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        overflow: false
    }
})

export default clv
