import State from '../../src/State'
import { Store, Event, Bus } from 'g6502-interfaces'

export const build6502State = (): State => ({
    pc: 1,
    a: 2,
    x: 3,
    y: 4,
    sp: 5,
    irq: false,
    nmi: false,
    status: {
        negative: true,
        overflow: true,
        decimal: true,
        irqDisable: true,
        break: true,
        zero: true,
        carry: true
    },
    initialised: true,
    cycles: 7
})

export const buildBus = (): Bus => ({
    read: jest.fn<number, [number]>(),
    write: jest.fn<void, [number, number]>(),
    attachComponentCommand: jest.fn()
})

export const buildStore = (): Store<State> => ({
    read: jest.fn<State, []>(),
    write: jest.fn<void, [Event<State>]>()
})
