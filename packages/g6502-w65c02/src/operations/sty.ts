import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const sty = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.y)
    return {}
}

export default sty
