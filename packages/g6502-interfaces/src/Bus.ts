export interface Bus {
    read: (address: number) => number
    write: (address: number, value: number) => void
}
