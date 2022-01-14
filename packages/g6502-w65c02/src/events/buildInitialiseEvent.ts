import { Event } from 'g6502-interfaces'
import { Bus } from 'g6502-interfaces'
import {
    INITIALISATION_CYCLES,
    RESET_VECTOR
} from '../constants'
import littleEndian from '../bitwise/littleEndian'
import State from '../State'

export const buildInitialiseEvent = (bus: Bus): Event<State> => {
    const lo = bus.read(RESET_VECTOR + 0)
    const hi = bus.read(RESET_VECTOR + 1)
    const pc = littleEndian([lo, hi])
    return {
        pc,
        a: 0,
        x: 0,
        y: 0,
        sp: 0xfd,
        irq: false,
        nmi: false,
        status: {
            negative: false,
            overflow: false,
            decimal: false,
            break: false,
            irqDisable: true,
            zero: false,
            carry: false
        },
        initialised: true,
        cycles: INITIALISATION_CYCLES
    }
}
