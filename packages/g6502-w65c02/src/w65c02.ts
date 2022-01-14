import State from './State'

export interface w65c02 {
    clock: () => void
    irq: () => void
    nmi: () => void
    reset: () => void
    getState: () => State
}
