import * as chai from 'chai'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'
import * as sinonChai from 'sinon-chai'
import { buildStore, buildState } from '../../../helpers/factories'
import { readQuery } from '../../../../src/application/queries/readQuery'
import * as readFromMemoryUnit from '../../../../src/domain/addressing/readFromMemory'
chai.use(sinonChai)
const expect = chai.expect

describe('Memory', () => {
    describe('Unit', () => {
        describe('readQuery', () => {
            let sandbox: SinonSandbox
            let readFromMemory: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                readFromMemory = sandbox.stub(readFromMemoryUnit, 'readFromMemory')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should pass state and address to readFromMemory', () => {
                const address = 3

                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                const uut = readQuery(store)
                uut(address)

                expect(readFromMemory).to.have.been.calledWith(state, address)
            })

            it('should return result of memory read', () => {
                const address = 10
                const expected = 7
                
                readFromMemory.returns(expected)

                const uut = readQuery(buildStore())
                const actual = uut(address)

                expect(actual).to.be.equal(expected)
            })
        })
    })
})
