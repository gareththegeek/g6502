const highByte = (word: number): number => (word & 0xff00) >> 8

export default highByte
