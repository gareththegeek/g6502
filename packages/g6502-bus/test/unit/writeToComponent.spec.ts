import { buildRangedComponent, buildRange } from '../helpers/factories'
import { writeToComponent } from '../../src/writeToComponent'

describe('Bus', () => {
    describe('Unit', () => {
        describe('writeToComponent', () => {
            it('should write to specified address relative to component\'s range', () => {
                const rangedComponent = buildRangedComponent(buildRange(5, 7))

                writeToComponent(rangedComponent, 6, 0)

                expect(rangedComponent.component.write).toHaveBeenCalledWith(6 - 5, expect.any(Number))
            })

            it('should write value to the component', () => {
                const rangedComponent = buildRangedComponent()
                const expected = 42
                
                writeToComponent(rangedComponent, 0, expected)

                expect(rangedComponent.component.write).toHaveBeenCalledWith(expect.any(Number), expected)
            })
        })
    })
})