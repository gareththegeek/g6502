import IndexOffset from '../IndexOffset'

export const getIndexOffset = (address: number): IndexOffset => ({
    index: address >> 8,
    offset: address & 0xff
})
