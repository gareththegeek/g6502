import { Store } from 'g6502-interfaces'
import State from '../State'
import { buildResetEvent } from '../events/buildResetEvent'

const resetCommand = (store: Store<State>): void => store.write(buildResetEvent())

export default resetCommand
