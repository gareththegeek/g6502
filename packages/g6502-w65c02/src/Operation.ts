import { Event, Bus } from 'g6502-interfaces'
import State from './State'

type Operation = (state: State, bus: Bus, parameter: number) => Event<State>

export default Operation
