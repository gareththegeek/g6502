import State from '../../src/State'
import { Store } from 'g6502-interfaces'

export const buildState = (): State => ({
    data: []
})

export const buildStore = (): Store<State> => ({
    read: jest.fn(),
    write: jest.fn()
})
