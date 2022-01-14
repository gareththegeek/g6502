import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildState } from '../../../helpers/factories'
import { readFromMemory } from '../../../../src/domain/addressing/readFromMemory'
chai.use(sinonChai)
const expect = chai.expect

describe('Memory', () => {
    describe('Unit', () => {
        describe('readFromMemory', () => {
            it('should return value at specified address in state', () => {
                const address = 3
                const expected = 6

                const state = buildState()
                state.pages = [{ data: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] }]

                const actual = readFromMemory(state, address)

                expect(actual).to.be.equal(expected)
            })

            it('should return zero if read outside of address range', () => {
                const address = 10
                const expected = 0

                const state = buildState()
                state.pages = [{ data: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] }]

                const actual = readFromMemory(state, address)

                expect(actual).to.be.equal(expected)
            })

            it('should use correct page index and offset when accessing memory', () => {
                const address = 0x100 + 2
                const expected = 4

                const state = buildState()
                state.pages = [{ data: [] }, { data: [0, 0, expected, 0, 0]}]

                const actual = readFromMemory(state, address)

                expect(actual).to.be.equal(expected)
            })
        })
    })
})
