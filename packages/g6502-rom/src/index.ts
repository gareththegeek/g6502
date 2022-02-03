import Rom from './Rom'
import State from './State'
import { Event, Store } from 'g6502-interfaces'
import { read } from './public/read'
import { buildDefaultStateEvent } from './events/buildDefaultStateEvent'

export const buildRom = (data: number[]): Rom => {
    let state: State = {} as State
    const store: Store<State> = {
        read: () => state,
        write: (event: Event<State>) => ({
            ...state,
            ...event
        })
    }
    store.write(buildDefaultStateEvent(data))

    return {
        read: (address: number) => read(store, address),
        write: () => { /* STUB */ }
    }
}
