import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const txs = (state: State, _: Bus, __: number): Event<State> => ({
    sp: state.x
})

export default txs
