import { Store } from 'g6502-interfaces'
import State from '../State'
import { getComponentAt } from '../getComponentAt'
import { writeToComponent } from '../writeToComponent'

export const write =
    (store: Store<State>, address: number, value: number): void => {
        const state = store.read()

        const component = getComponentAt(state, address)
        if (!component) {
            return
        }

        writeToComponent(component, address, value)
    }
