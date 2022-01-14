import { RangedComponent } from 'g6502-interfaces'
import State from './State'

export const canAttachComponent = (state: State, component: RangedComponent): boolean => {
    if (!state?.components) {
        return true
    }

    if (!component) {
        return false
    }

    const overlaps = state.components.some(x =>
        x.range.start <= component.range.finish
            && component.range.start <= x.range.finish)
    
    return !overlaps
}
