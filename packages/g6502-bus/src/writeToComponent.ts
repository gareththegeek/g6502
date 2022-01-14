import { RangedComponent } from 'g6502-interfaces'

export const writeToComponent = (rangedComponent: RangedComponent, address: number, value: number) => {
    const {
        component,
        range
    } = rangedComponent

    component.write(address - range.start, value)
}
