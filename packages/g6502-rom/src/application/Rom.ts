import { Store } from 'gemu-interfaces'
import { Component } from 'gemu-interfaces'
import State from '../domain/State'
import { readQuery } from './queries/readQuery'
import { initialiseCommand } from './commands/initialiseCommand'

export default interface Rom extends Component {}

export const buildRom = (store: Store<State>, data: number[]): Rom => {
    initialiseCommand(store)(data)
    return {
        readQuery: readQuery(store),
        writeCommand: () => { /* Stub */ }
    }
}
