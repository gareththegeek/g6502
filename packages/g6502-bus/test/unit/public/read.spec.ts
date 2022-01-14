import * as getComponentAtUnit from '../../../src/getComponentAt'
import * as readFromComponentUnit from '../../../src/readFromComponent'
import { buildState, buildStore, buildRangedComponent } from '../../helpers/factories'
import { read } from '../../../src/public/read'

describe('Bus', () => {
    describe('Unit', () => {
        describe('read', () => {
            let getComponentAt: jest.SpyInstance
            let readFromComponent: jest.SpyInstance

            beforeEach(() => {
                getComponentAt = jest.spyOn(getComponentAtUnit, 'getComponentAt')
                readFromComponent = jest.spyOn(readFromComponentUnit, 'readFromComponent')
            })

            it('should not read from component if cannot get component at requested address', () => {
                const address = 0
                const store = buildStore()
                const state = buildState();
                (store.read as jest.Mock).mockReturnValue(state)

                getComponentAt.mockReturnValue(undefined)

                const uut = read
                uut(store, address)

                expect(getComponentAt).toHaveBeenCalledWith(state, address)
                expect(readFromComponent).not.toHaveBeenCalled()
            })

            it('should read and return value from component at specified address if component found at that address', () => {
                const expected = {
                    address: 5,
                    value: 8,
                    rangedComponent: buildRangedComponent()
                }
                const store = buildStore()

                readFromComponent.mockReturnValue(expected.value)
                getComponentAt.mockReturnValue(expected.rangedComponent)

                const uut = read
                const actual = uut(store, expected.address)

                expect(readFromComponent).toHaveBeenCalledWith(
                    expected.rangedComponent,
                    expected.address)
                expect(actual).toEqual(expected.value)
            })
        })
    })
})
