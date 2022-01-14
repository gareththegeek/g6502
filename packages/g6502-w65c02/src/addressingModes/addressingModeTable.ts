import AddressingMode from '../AddressingMode'
import implied from './implied'
import accumulator from './accumulator'
import immediate from './immediate'
import absolute from './absolute'
import zeroPage from './zeroPage'
import indirect from './indirect'
import absoluteIndexedX from './absoluteIndexedX'
import absoluteIndexedY from './absoluteIndexedY'
import zeroPageIndexedX from './zeroPageIndexedX'
import zeroPageIndexedY from './zeroPageIndexedY'
import indexedIndirect from './indexedIndirect'
import indirectIndexed from './indirectIndexed'
import relative from './relative'
import indirectJmp from './indirectJmp'

const ADDRESSING_MODE_TABLE: { [addressingMode: string]: AddressingMode } = {
    accum: accumulator,
    imm: immediate,
    implied: implied,
    relative: relative,
    abs: absolute,
    zp: zeroPage,
    indirect: indirect,
    indirectjmp: indirectJmp,
    'abs,x': absoluteIndexedX,
    'abs,y': absoluteIndexedY,
    'zp,x': zeroPageIndexedX,
    'zp,y': zeroPageIndexedY,
    '(ind,x)': indexedIndirect,
    '(ind),y': indirectIndexed
}

export const getAddressingModeTable = () => ADDRESSING_MODE_TABLE
