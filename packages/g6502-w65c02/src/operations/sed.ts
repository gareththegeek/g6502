import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const sed = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: true
    }
})

export default sed
