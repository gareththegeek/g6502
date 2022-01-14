import * as chai from 'chai'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'
import * as sinonChai from 'sinon-chai'
import { buildStore } from '../../../helpers/factories'
import { initialiseCommand } from '../../../../src/application/commands/initialiseCommand'
import * as buildInitialiseEventUnit from '../../../../src/domain/events/buildInitialiseEvent'
chai.use(sinonChai)
const expect = chai.expect

describe('Memory', () => {
    describe('Unit', () => {
        describe('initialiseCommand', () => {
            let sandbox: SinonSandbox
            let buildInitialiseEvent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                buildInitialiseEvent = sandbox.stub(buildInitialiseEventUnit, 'buildInitialiseEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should write initialise event to store', () => {
                const expected = { foo: 'bar' }
                const store = buildStore()
                buildInitialiseEvent.returns(expected)

                const uut = initialiseCommand(store)
                uut(0)

                expect(store.write).to.have.been.calledWith(expected)
            })

            it('should use specified page count to initialise state', () => {
                const expected = 4
                const store = buildStore()

                const uut = initialiseCommand(store)
                uut(expected)

                expect(buildInitialiseEvent).to.have.been.calledWith(expected)
            })
        })
    })
})