import { Event } from 'g6502-interfaces'
import Operation from '../../src/Operation'
import { Bus } from 'g6502-interfaces'
import { build6502State } from './factories'
import State from '../../src/State'

export const testOperation = (op: Operation, state: object, status: object, b: number, bus?: Bus): Event<State> => {
    const defaults = build6502State()
    const previous = {
        ...defaults,
        ...state,
        status: {
            ...defaults.status,
            ...status
        }
    }

    return op(previous, bus || ({} as Bus), b)
}
