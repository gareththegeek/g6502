import { Store } from 'g6502-interfaces'
import State from '../State'
import { readFromMemory } from '../addressing/readFromMemory'

export const read = (store: Store<State>, address: number): number =>
    readFromMemory(store.read(), address)
