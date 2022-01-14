import { buildRangedComponent, buildRange } from '../helpers/factories'
import { readFromComponent } from '../../src/readFromComponent'

describe('Bus', () => {
    describe('Unit', () => {
        describe('readFromComponent', () => {
            it('should read from specified address relative to component\'s range', () => {
                const rangedComponent = buildRangedComponent(buildRange(5, 7))

                readFromComponent(rangedComponent, 6)

                expect(rangedComponent.component.read).toHaveBeenCalledWith(6 - 5)
            })

            it('should return the result of the component read', () => {
                const rangedComponent = buildRangedComponent()
                const component = rangedComponent.component
                const expected = 42;
                (component.read as jest.Mock).mockReturnValue(expected)

                const actual = readFromComponent(rangedComponent, 1)

                expect(actual).toEqual(expected)
            })
        })
    })
})