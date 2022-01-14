import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const sta = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.a)
    return {}
}

export default sta
