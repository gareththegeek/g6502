import isWord from './isWord'

const littleEndian = (data: Array<number>): number => {
    if (!isWord(data)) {
        throw new Error(`Expected word but got ${data}`)
    }
    return data[0] | (data[1] << 8)
}

export default littleEndian
