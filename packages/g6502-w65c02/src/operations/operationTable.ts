import Operation from '../Operation'
import brk from './brk'
import adc from './adc'
import and from './and'
import asl from './asl'
import asla from './asla'
import bcc from './bcc'
import beq from './beq'
import bit from './bit'
import bmi from './bmi'
import bne from './bne'
import bpl from './bpl'
import bvc from './bvc'
import bvs from './bvs'
import clc from './clc'
import cld from './cld'
import cli from './cli'
import clv from './clv'
import cpx from './cpx'
import cpy from './cpy'
import cmp from './cmp'
import dec from './dec'
import dex from './dex'
import dey from './dey'
import eor from './eor'
import inc from './inc'
import inx from './inx'
import iny from './iny'
import jmp from './jmp'
import jsr from './jsr'
import lda from './lda'
import ldx from './ldx'
import ldy from './ldy'
import lsr from './lsr'
import lsra from './lsra'
import nop from './nop'
import ora from './ora'
import php from './php'
import rol from './rol'
import rola from './rola'
import ror from './ror'
import rora from './rora'
import rti from './rti'
import rts from './rts'
import sbc from './sbc'
import sec from './sec'
import sed from './sed'
import sei from './sei'
import sta from './sta'
import stx from './stx'
import sty from './sty'
import tax from './tax'
import tay from './tay'
import tsx from './tsx'
import txa from './txa'
import txs from './txs'
import tya from './tya'
import bcs from './bcs'
import pha from './pha'
import pla from './pla'
import plp from './plp'

const OPERATION_TABLE: { [mnemonic: string]: Operation } = {
    adc,
    and,
    asl,
    asla,
    bcc,
    bcs,
    beq,
    bit,
    bmi,
    bne,
    bpl,
    brk,
    bvc,
    bvs,
    clc,
    cld,
    cli,
    clv,
    cmp,
    cpx,
    cpy,
    dec,
    dex,
    dey,
    eor,
    inc,
    inx,
    iny,
    jmp,
    jsr,
    lda,
    ldx,
    ldy,
    lsr,
    lsra,
    nop,
    ora,
    pha,
    php,
    pla,
    plp,
    rol,
    rola,
    ror,
    rora,
    rti,
    rts,
    sbc,
    sec,
    sed,
    sei,
    sta,
    stx,
    sty,
    tax,
    tay,
    tsx,
    txa,
    txs,
    tya
}

export const getOperationTable = () => OPERATION_TABLE
