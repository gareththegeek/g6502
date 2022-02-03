import { Event } from 'g6502-interfaces'
import { PAGE_SIZE } from '../constants'
import State from '../State'

export const buildDefaultStateEvent = (pageCount: number): Event<State> => ({
    pages: new Array(pageCount).fill({
        data: new Array(PAGE_SIZE).fill(0)
    })
})
