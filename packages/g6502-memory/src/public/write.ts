import { Store } from 'g6502-interfaces'
import State from '../State'
import { buildWriteState } from '../events/buildWriteState'

export const write = (store: Store<State>, address: number, value: number): void =>
    store.write(buildWriteState(store.read(), address, value))
