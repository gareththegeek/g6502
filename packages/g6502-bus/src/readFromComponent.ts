import { RangedComponent } from 'g6502-interfaces'

export const readFromComponent = (rangedComponent: RangedComponent, address: number): number => {
    const {
        component,
        range
    } = rangedComponent

    return component.read(address - range.start)
}
