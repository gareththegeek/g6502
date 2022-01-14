import * as chai from 'chai'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'
import * as sinonChai from 'sinon-chai'
import { buildStore, buildState } from '../../../helpers/factories'
import { writeCommand } from '../../../../src/application/commands/writeCommand'
import * as buildWriteStateUnit from '../../../../src/domain/events/buildWriteState'
chai.use(sinonChai)
const expect = chai.expect

describe('Memory', () => {
    describe('Unit', () => {
        describe('writeCommand', () => {
            let sandbox: SinonSandbox
            let buildWriteState: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                buildWriteState = sandbox.stub(buildWriteStateUnit, 'buildWriteState')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should write specified address and value to memory', () => {
                const address = 4
                const value = 7
                const state = buildState()
                const store = buildStore()
                store.read.returns(state)

                const uut = writeCommand(store)
                uut(address, value)

                expect(buildWriteState).to.have.been.calledWith(state, address, value)
            })

            it('should write new state to store totally replacing existing state', () => {
                const expected = { foo: 'bar' }
                buildWriteState.returns(expected)

                const state = buildState()
                const store = buildStore()
                store.read.returns(state)

                const uut = writeCommand(store)
                uut(0, 0)

                expect(store.overwrite).to.have.been.calledWith(expected)
            })
        })
    })
})
