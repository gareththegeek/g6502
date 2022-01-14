import { getIndexOffset } from '../addressing/getIndexOffset'
import updateElement from '../immutability/updateElement'
import State from '../State'

export const buildWriteState = (state: State, address: number, value: number): State => {
    const indexOffset = getIndexOffset(address)
    const newPage = {
        data: updateElement(state.pages[indexOffset.index].data, indexOffset.offset, value)
    }
    return {
        pages: updateElement(state.pages, indexOffset.index, newPage)
    }
}
