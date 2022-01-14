import { Event, RangedComponent } from 'g6502-interfaces'
import { Store } from 'g6502-interfaces'
import State from '../State'
import { read } from './read'
import { write } from './write'
import { attachComponent } from './attachComponent'
import { buildDefaultStateEvent } from '../events/buildDefaultStateEvent'

export const buildBus = () => {
    let state: State = {} as State
    const store: Store<State> = {
        read: () => state,
        write: (event: Event<State>) => ({
            ...state,
            ...event
        })
    }
    store.write(buildDefaultStateEvent())

    return {
        getState: () => store.read(),
        read: (address: number) => {
            read(store, address)
        },
        write: (address: number, value: number) => {
            write(store, address, value)
        },
        attachComponent: (rangedComponent: RangedComponent) => {
            attachComponent(store, rangedComponent)
        }
    }
}
