import Memory from './Memory'
import State from './State'
import { Event, Store } from 'g6502-interfaces'
import { buildDefaultStateEvent } from './events/buildDefaultStateEvent'
import { read } from './public/read'
import { write } from './public/write'

export const buildMemory = (pageCount: number): Memory => {
    let state: State = {} as State
    const store: Store<State> = {
        read: () => state,
        write: (event: Event<State>) => ({
            ...state,
            ...event
        })
    }
    store.write(buildDefaultStateEvent(pageCount))

    return {
        read: (address: number) => read(store, address),
        write: (address: number, value: number) => {
            write(store, address, value)
        }
    }
}
