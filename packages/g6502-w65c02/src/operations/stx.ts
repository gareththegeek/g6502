import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const stx = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.x)
    return {}
}

export default stx
