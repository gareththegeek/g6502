import State from './State'
import { RangedComponent } from 'g6502-interfaces'

export const getComponentAt = (state: State, address: number): RangedComponent | undefined => 
    state.components.find(x =>
        x.range.start <= address
            && x.range.finish >= address)
