import { Event } from 'g6502-interfaces'
import State from '../State'
import { Bus } from 'g6502-interfaces'

const jmp = (_: State, __: Bus, parameter: number): Event<State> => ({
    pc: parameter
})

export default jmp
