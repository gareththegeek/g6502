import StatusRegister from '../StatusRegister'

const getStatusByte = (status: StatusRegister): number =>
    (status.carry ? 0x01 : 0x00) |
    (status.zero ? 0x02 : 0x00) |
    (status.irqDisable ? 0x04 : 0x00) |
    (status.decimal ? 0x08 : 0x00) |
    (status.break ? 0x10 : 0x00) |
    0x20 |
    (status.overflow ? 0x40 : 0x00) |
    (status.negative ? 0x80 : 0x00)

export default getStatusByte
