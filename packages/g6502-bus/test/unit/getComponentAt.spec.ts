import { getComponentAt } from '../../src/getComponentAt'
import { buildRangedComponent, buildRange } from '../helpers/factories'

describe('Bus', () => {
    describe('Unit', () => {
        describe('getComponentAt', () => {
            it('should return undefined if no existing ranges', () => {
                const actual = getComponentAt({ components: [] }, 0)

                expect(actual).toBeUndefined()
            })

            it('should return undefined if no matching range found', () => {
                const existing = buildRangedComponent(buildRange(0, 1))
                const actual = getComponentAt({ components: [existing] }, 2)

                expect(actual).toBeUndefined()
            })
            
            it('should return component if its range starts at requested address', () => {
                const expected = buildRangedComponent(buildRange(0, 2))
                const actual = getComponentAt({ components: [expected] }, 0)

                expect(actual).toEqual(expected)
            })

            it('should return component if its range finishes at requested address', () => {
                const expected = buildRangedComponent(buildRange(0, 2))
                const actual = getComponentAt({ components: [ expected] }, 2)

                expect(actual).toEqual(expected)
            })

            it('should return component if requested address inside its range', () => {
                const expected = buildRangedComponent(buildRange(0, 2))
                const actual = getComponentAt({ components: [expected] }, 1)

                expect(actual).toEqual(expected)
            })

            it('should return matching component', () => {
                const expected = buildRangedComponent(buildRange(3, 6))
                const unexpected1 = buildRangedComponent(buildRange(0, 2))
                const unexpected2 = buildRangedComponent(buildRange(7, 8))
                const actual = getComponentAt({ components: [unexpected1, unexpected2, expected] }, 4)

                expect(actual).toEqual(expected)
            })
        })
    })
})
