const isNegative = (a: number): boolean => (a & 0x80) === 0x80

export default isNegative
