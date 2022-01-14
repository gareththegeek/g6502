import { Store } from 'gemu-interfaces'
import State from '../../domain/State'

export const readQuery = (store: Store<State>) =>
    (address: number): number => store.read()?.data[address] || 0
