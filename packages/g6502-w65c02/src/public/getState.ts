import { Store } from 'g6502-interfaces'
import State from '../State'

const stateQuery = (store: Store<State>): State => store.read()

export default stateQuery
