import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildWriteState } from '../../../../src/domain/events/buildWriteState'
import { PAGE_SIZE } from '../../../../src/domain/constants'
chai.use(sinonChai)
const expect = chai.expect

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

                expect(actual.pages[0].data[2]).to.be.equal(expected)
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

                expect(actual.pages.length).to.be.equal(2)
                expect(actual.pages[0].data).to.be.deep.equal([1, 2, 3, 4])
                expect(actual.pages[1].data).to.be.deep.equal([5, 6, 7, 8])
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

                expect(actual.pages[1].data[1]).to.be.equal(expected)
            })
        })
    })
})
