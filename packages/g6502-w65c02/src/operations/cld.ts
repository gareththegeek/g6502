import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const cld = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: false
    }
})

export default cld
