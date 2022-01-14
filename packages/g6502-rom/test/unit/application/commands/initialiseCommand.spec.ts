import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildStore, buildState } from '../../../helpers/factories'
import { initialiseCommand } from '../../../../src/application/commands/initialiseCommand'
chai.use(sinonChai)
const expect = chai.expect

describe('Rom', () => {
    describe('Unit', () => {
        describe('initialiseCommand', () => {
            it('should write specified data array to store', () => {
                const expected = [3, 2, 1]
                const store = buildStore()

                const uut = initialiseCommand(store)
                uut(expected)

                expect(store.write).to.have.been.calledWith({ 
                    data: expected,
                    initialised: true
                })
            })

            it('should not write to store if already initialised', () => {
                const store = buildStore()
                const state = buildState()
                state.initialised = true
                store.read.returns(state)

                const uut = initialiseCommand(store)
                uut([1])
                
                expect(store.write).not.to.have.been.called
            })
        })
    })
})
