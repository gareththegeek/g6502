import { Store } from 'g6502-interfaces'
import State from '../State'
import { buildIrqEvent } from '../events/buildIrqEvent'

const irqCommand = (store: Store<State>): void => {
    if (store.read().status.irqDisable) {
        return
    }
    store.write(buildIrqEvent())
}

export default irqCommand
