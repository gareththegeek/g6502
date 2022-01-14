import { RangedComponent } from 'g6502-interfaces'
import { Store } from 'g6502-interfaces'
import State from '../State'
import { canAttachComponent } from '../canAttachComponent'

export const attachComponent =
    (store: Store<State>, rangedComponent: RangedComponent): void => {
        const state = store.read()

        if (canAttachComponent(state, rangedComponent)) {
            store.write({
                components: [...state.components || [], rangedComponent]
            })
        }
    }
