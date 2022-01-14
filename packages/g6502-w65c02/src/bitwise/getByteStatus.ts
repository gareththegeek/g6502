import StatusRegister from '../StatusRegister'

const getByteStatus = (byte: number): StatusRegister => ({
    carry: (byte & 0x01) === 0x01,
    zero: (byte & 0x02) === 0x02,
    irqDisable: (byte & 0x04) === 0x04,
    decimal: (byte & 0x08) === 0x08,
    break: (byte & 0x10) === 0x10,
    overflow: (byte & 0x40) === 0x40,
    negative: (byte & 0x80) === 0x80
})

export default getByteStatus
