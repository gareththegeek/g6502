import State from '../State'
import { Event } from 'g6502-interfaces'

export const buildWaitCycleEvent = (state: State): Event<State> =>
    ({ cycles: state.cycles - 1 })
