import { Event } from 'gemu-interfaces'
import { PAGE_SIZE } from '../constants'
import State from '../State'

export const buildInitialiseEvent = (pageCount: number): Event<State> => ({
    pages: new Array(pageCount).fill({
        data: new Array(PAGE_SIZE).fill(0)
    })
})
