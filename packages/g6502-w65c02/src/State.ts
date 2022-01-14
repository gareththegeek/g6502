import StatusRegister from './StatusRegister'
import DataRegisters from './DataRegisters'

export default interface State extends DataRegisters {
    pc: number
    a: number
    x: number
    y: number
    sp: number
    status: StatusRegister
    initialised: boolean
    cycles: number
    irq: boolean
    nmi: boolean
}
