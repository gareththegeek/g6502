import { Event } from 'g6502-interfaces'
import State from '../State'

export const buildDefaultStateEvent = (): Event<State> => ({
    pc: 0,
    a: 0,
    x: 0,
    y: 0,
    sp: 0,
    status: {
        break: false,
        carry: false,
        decimal: false,
        irqDisable: false,
        negative: false,
        overflow: false,
        zero: false
    },
    initialised: false,
    cycles: 0,
    irq: false,
    nmi: false
})
