import { Bus, Event, Store } from 'g6502-interfaces'
import { buildDefaultStateEvent } from './events/buildDefaultStateEvent'
import State from './State'
import clock from './public/clock'
import getState from './public/getState'
import irq from './public/irq'
import nmi from './public/nmi'
import reset from './public/reset'

export const build6502 = (bus: Bus) => {
    let state: State = {} as State
    const store: Store<State> = {
        read: () => state,
        write: (event: Event<State>) => ({
            ...state,
            ...event,
            status: {
                ...state.status,
                ...event.status
            }
        })
    }
    store.write(buildDefaultStateEvent())

    return {
        clock: () => {
            clock(bus, store)
        },
        getState: () => getState(store),
        irq: () => {
            irq(store)
        },
        nmi: () => {
            nmi(store)
        },
        reset: () => {
            reset(store)
        }
    }
}
