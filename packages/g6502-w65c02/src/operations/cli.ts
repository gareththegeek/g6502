import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const cli = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: false
    }
})

export default cli
