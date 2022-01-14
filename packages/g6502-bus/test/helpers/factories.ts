import { Store, RangedComponent, Range, Component } from 'g6502-interfaces'
import State from '../../src/State'

export const buildRange = (s?: number, f?: number): Range => ({
    start: s || 0,
    finish: f || 1
})

export const buildComponent = (): Component => ({
    read: jest.fn(),
    write: jest.fn()
})

export const buildRangedComponent = (range?: Range): RangedComponent => ({
    component: buildComponent(),
    range: range || buildRange()
})

export const buildState = (): State => ({
    components: []
})

export const buildStore = (): Store<State> => ({
    read: jest.fn(),
    write: jest.fn()
})
