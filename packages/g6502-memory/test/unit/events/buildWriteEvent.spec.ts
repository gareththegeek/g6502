import { buildWriteState } from '../../../src/events/buildWriteState'
import { PAGE_SIZE } from '../../../src/constants'

describe('Memory', () => {
    describe('Unit', () => {
        describe('buildWriteEvent', () => {
            it('should return state with value at specified page offset updated to specified value', () => {
                const expected = 7
                const address = 2
                const state = {
                    pages: [{
                        data: [0, 0, 0, 0]
                    }]
                }
                const actual = buildWriteState(state, address, expected)

                expect(actual.pages[0].data[2]).toEqual(expected)
            })

            it('should not modify other addresses in memory', () => {
                const value = 3
                const address = 2
                const state = {
                    pages: [{
                        data: [1, 2, 3, 4]
                    }, {
                        data: [5, 6, 7, 8]
                    }]
                }
                const actual = buildWriteState(state, address, value)

                expect(actual.pages.length).toEqual(2)
                expect(actual.pages[0].data).toEqual([1, 2, 3, 4])
                expect(actual.pages[1].data).toEqual([5, 6, 7, 8])
            })

            it('should resolve address to correct page index and offset', () => {
                const expected = 7
                const address = PAGE_SIZE + 1
                const state = {
                    pages: [{
                        data: []
                    }, {
                        data: [0, 0, 0]
                    }]
                }
                const actual = buildWriteState(state, address, expected)

                expect(actual.pages[1].data[1]).toEqual(expected)
            })
        })
    })
})
