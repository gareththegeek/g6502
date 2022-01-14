import { getIndexOffset } from './getIndexOffset'
import State from '../State'

export const readFromMemory = (state: State, address: number): number => {
    const indexOffset = getIndexOffset(address)
    return state.pages[indexOffset.index].data[indexOffset.offset] || 0
}
