import { PAGE_SIZE } from '../../../src/constants'
import { buildDefaultStateEvent } from '../../../src/events/buildDefaultStateEvent'

describe('Memory', () => {
    describe('Unit', () => {
        describe('buildDefaultStateEvent', () => {
            it('should return specified number of zero pages', () => {
                const pageCount = 2

                const actual = buildDefaultStateEvent(pageCount)

                expect(actual.pages).toBeDefined()
                expect(actual.pages.length).toEqual(pageCount)
                expect(actual.pages[0].data).toBeDefined()
                expect(actual.pages[0].data.length).toEqual(PAGE_SIZE)
                expect(actual.pages[1].data).toBeDefined()
                expect(actual.pages[1].data.length).toEqual(PAGE_SIZE)
            })
        })
    })
})
