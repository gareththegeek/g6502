import State from '../State'
import { Event } from 'g6502-interfaces'
import { Bus } from 'g6502-interfaces'
import { buildInterruptEvent } from './buildInterruptEvent'
import { B_NMI, NMI_VECTOR } from '../constants'

export const buildNmiInterruptEvent = (state: State, bus: Bus): Event<State> =>
    buildInterruptEvent(state, bus, NMI_VECTOR, B_NMI)
