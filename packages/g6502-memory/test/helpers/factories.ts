import State from '../../src/State'
import { Store } from 'g6502-interfaces'

export const buildState = (): State => ({
    pages: []
})

export const buildStore = (): Store<State> => ({
    read: jest.fn(),
    write: jest.fn()
})
