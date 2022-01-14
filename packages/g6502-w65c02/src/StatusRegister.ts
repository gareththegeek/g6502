export default interface StatusRegister {
    negative: boolean
    overflow: boolean
    decimal: boolean
    break: boolean
    irqDisable: boolean
    zero: boolean
    carry: boolean
}
