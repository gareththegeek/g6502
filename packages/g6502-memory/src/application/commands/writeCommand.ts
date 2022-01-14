import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import { buildWriteState } from '../../domain/events/buildWriteState'

export const writeCommand = (store: Store<State>) =>
    (address: number, value: number): void =>
        store.overwrite(buildWriteState(store.read(), address, value))
