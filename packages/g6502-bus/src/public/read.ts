import { Store } from 'g6502-interfaces'
import State from '../State'
import { getComponentAt } from '../getComponentAt'
import { readFromComponent } from '../readFromComponent'

export const read =
    (store: Store<State>, address: number): number => {
        const state = store.read()

        const component = getComponentAt(state, address)

        if (!!component) {
            return readFromComponent(component, address)
        }

        return 0xff
    }
