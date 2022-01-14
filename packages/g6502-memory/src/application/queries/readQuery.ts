import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import { readFromMemory } from '../../domain/addressing/readFromMemory'

export const readQuery = (store: Store<State>) => 
    (address: number): number => readFromMemory(store.read(), address)
