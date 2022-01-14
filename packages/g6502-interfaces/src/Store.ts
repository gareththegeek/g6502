import { Event } from './Event'

export interface Store {
    read: <T>() => T
    write: (event: Event<T>) => void
}
