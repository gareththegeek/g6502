import { Store } from 'gemu-interfaces'
import { Component } from 'gemu-interfaces'
import State from '../domain/State'
import { readQuery } from './queries/readQuery'
import { initialiseCommand } from './commands/initialiseCommand'
import { writeCommand } from './commands/writeCommand'

export default interface Memory extends Component {}

export const buildMemory = (store: Store<State>, pageCount: number): Memory => {
    initialiseCommand(store)(pageCount)
    return {
        readQuery: readQuery(store),
        writeCommand: writeCommand(store)
    }
}
