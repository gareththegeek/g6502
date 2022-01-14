import highByte from './highByte'

const isPageCrossed = (base: number, relative: number) =>
    highByte(base) !== highByte(base + relative)

export default isPageCrossed
