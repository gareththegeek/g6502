import { Event } from './Event'

export interface Store<T> {
    read: () => T
    write: (event: Event<T>) => void
}
