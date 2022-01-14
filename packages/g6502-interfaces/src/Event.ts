type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

export type Event<T> = DeepPartial<T>
