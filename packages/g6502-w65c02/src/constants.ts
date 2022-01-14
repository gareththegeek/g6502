export const INITIALISATION_CYCLES = 6

export const NMI_VECTOR = 0xfffa
export const RESET_VECTOR = 0xfffc
export const IRQ_VECTOR = 0xfffe
export const BRK_VECTOR = 0xfffe

export const B_IRQ = 0x2 << 4
export const B_NMI = 0x2 << 4
export const B_PHP = 0x3 << 4
export const B_BRK = 0x3 << 4
