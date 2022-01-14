import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import { buildInterruptEvent } from '../events/buildInterruptEvent'
import { BRK_VECTOR, B_BRK } from '../constants'

const brk = (state: State, bus: Bus, _: number): Event<State> => {
    const interruptEvent = buildInterruptEvent(state, bus, BRK_VECTOR, B_BRK)
    return {
        ...interruptEvent,
        status: {
            ...interruptEvent.status,
            break: true
        }
    }
}

export default brk
