import { Store } from 'g6502-interfaces'
import State from '../State'

export const read = (store: Store<State>, address: number): number =>
    store.read()?.data[address] || 0
