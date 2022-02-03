import { Store } from 'g6502-interfaces'
import State from '../State'
import { buildInitialiseEvent } from '../events/buildDefaultStateEvent'

export const initialise = (store: Store<State>, pageCount: number): void =>
    store.write(buildInitialiseEvent(pageCount))
