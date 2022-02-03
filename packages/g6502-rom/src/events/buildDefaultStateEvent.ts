import { Event } from 'g6502-interfaces'
import State from '../State'

export const buildDefaultStateEvent = (data: number[]): Event<State> => ({ data })
