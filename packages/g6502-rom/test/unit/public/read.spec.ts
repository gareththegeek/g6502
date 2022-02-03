import { buildStore, buildState } from '../../helpers/factories'
import { read } from '../../../src/public/read'

describe('Rom', () => {
    describe('Unit', () => {
        describe('read', () => {
            it('should return value at specified address in state', () => {
                const address = 3
                const expected = 6

                const store = buildStore()
                const state = buildState()
                ; (store.read as jest.Mock).mockReturnValue(state)

                state.data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

                const uut = read
                const actual = uut(store, address)

                expect(actual).toEqual(expected)
            })

            it('should return zero if read outside of address range', () => {
                const address = 10
                const expected = 0

                const store = buildStore()
                const state = buildState()
                ;(store.read as jest.Mock).mockReturnValue(state)

                state.data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

                const uut = read
                const actual = uut(store, address)

                expect(actual).toEqual(expected)
            })
        })
    })
})
