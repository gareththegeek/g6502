import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import { buildInitialiseEvent } from '../../domain/events/buildInitialiseEvent'

export const initialiseCommand = (store: Store<State>) =>
    (pageCount: number): void =>
        store.write(buildInitialiseEvent(pageCount))
