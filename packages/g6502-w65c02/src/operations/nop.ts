import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const nop = (_: State, __: Bus, ___: number): Event<State> => ({})

export default nop
