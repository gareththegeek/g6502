import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildStore, buildState } from '../../../helpers/factories'
import { readQuery } from '../../../../src/application/queries/readQuery'
chai.use(sinonChai)
const expect = chai.expect

describe('Rom', () => {
    describe('Unit', () => {
        describe('readQuery', () => {
            it('should return value at specified address in state', () => {
                const address = 3
                const expected = 6

                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                state.data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

                const uut = readQuery(store)
                const actual = uut(address)

                expect(actual).to.be.equal(expected)
            })

            it('should return zero if read outside of address range', () => {
                const address = 10
                const expected = 0

                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                state.data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

                const uut = readQuery(store)
                const actual = uut(address)

                expect(actual).to.be.equal(expected)
            })
        })
    })
})
