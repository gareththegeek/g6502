import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { PAGE_SIZE } from '../../../../src/domain/constants'
import { buildInitialiseEvent } from '../../../../src/domain/events/buildInitialiseEvent'
chai.use(sinonChai)
const expect = chai.expect

describe('Memory', () => {
    describe('Unit', () => {
        describe('buildInitialiseEvent', () => {
            it('should return specified number of zero pages', () => {
                const pageCount = 2

                const actual = buildInitialiseEvent(pageCount)
                
                expect(actual.pages).not.to.be.undefined
                expect(actual.pages.length).to.be.equal(pageCount)
                expect(actual.pages[0].data).not.to.be.undefined
                expect(actual.pages[0].data.length).to.be.equal(PAGE_SIZE)
                expect(actual.pages[1].data).not.to.be.undefined
                expect(actual.pages[1].data.length).to.be.equal(PAGE_SIZE)
            })
        })
    })
})
