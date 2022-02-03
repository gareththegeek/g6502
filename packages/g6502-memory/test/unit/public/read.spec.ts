import { buildStore, buildState } from '../../helpers/factories'
import { read } from '../../../src/public/read'
import * as readFromMemoryUnit from '../../../src/addressing/readFromMemory'

describe('Memory', () => {
    describe('Unit', () => {
        describe('read', () => {
            let readFromMemory: jest.SpyInstance

            beforeEach(() => {
                readFromMemory = jest.spyOn(readFromMemoryUnit, 'readFromMemory')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should pass state and address to readFromMemory', () => {
                const address = 3

                const store = buildStore()
                const state = buildState()
                state.pages[0] = { data: [] }
                ; (store.read as jest.Mock).mockReturnValue(state)

                const uut = read
                uut(store, address)

                expect(readFromMemory).toHaveBeenCalledWith(state, address)
            })

            it('should return result of memory read', () => {
                const address = 10
                const expected = 7

                readFromMemory.mockReturnValue(expected)

                const uut = read
                const actual = uut(buildStore(), address)

                expect(actual).toEqual(expected)
            })
        })
    })
})
