import { Store } from 'g6502-interfaces'
import State from '../State'
import { buildNmiEvent } from '../events/buildNmiEvent'

const nmiCommand = (store: Store<State>): void => store.write(buildNmiEvent())

export default nmiCommand
