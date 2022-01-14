import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'
import { buildBranchEvent } from '../events/buildBranchEvent'

const bne = (state: State, _: Bus, parameter: number): Event<State> =>
    buildBranchEvent(state, parameter, !state.status.zero)

export default bne
