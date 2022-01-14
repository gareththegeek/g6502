export interface Component {
    read: (address: number) => number
    write: (address: number, value: number) => void
}
