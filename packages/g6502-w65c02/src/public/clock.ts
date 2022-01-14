import { Bus, Store } from 'g6502-interfaces'
import State from '../State'
import { buildInitialiseEvent } from '../events/buildInitialiseEvent'
import { buildWaitCycleEvent } from '../events/buildWaitCycleEvent'
import { buildNmiInterruptEvent } from '../events/buildNmiInterruptEvent'
import { buildIrqInterruptEvent } from '../events/buildIrqInterruptEvent'
import { buildOperationEvent } from '../events/buildOperationEvent'

const clock = (bus: Bus, store: Store<State>): void => {
    const state = store.read()

    if (state.cycles !== 0) {
        store.write(buildWaitCycleEvent(state))
        return
    }

    if (!state.initialised) {
        store.write(buildInitialiseEvent(bus))
        return
    }

    if (state.nmi) {
        store.write(buildNmiInterruptEvent(state, bus))
        return
    }

    if (state.irq) {
        store.write(buildIrqInterruptEvent(state, bus))
        return
    }

    store.write(buildOperationEvent(state, bus))
}

export default clock
