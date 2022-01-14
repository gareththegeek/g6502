import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const sei = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: true
    }
})

export default sei
