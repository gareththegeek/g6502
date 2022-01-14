import * as getComponentAtUnit from '../../../src/getComponentAt'
import * as writeToComponentUnit from '../../../src/writeToComponent'
import { buildState, buildStore, buildRangedComponent } from '../../helpers/factories'
import { write } from '../../../src/public/write'

describe('Bus', () => {
    describe('Unit', () => {
        describe('write', () => {
            let getComponentAt: jest.SpyInstance
            let writeToComponent: jest.SpyInstance

            beforeEach(() => {
                getComponentAt = jest.spyOn(getComponentAtUnit, 'getComponentAt')
                writeToComponent = jest.spyOn(writeToComponentUnit, 'writeToComponent')
            })

            it('should not write to component if cannot get component at requested address', () => {
                const address = 0
                const store = buildStore()
                const state = buildState();
                (store.read as jest.Mock).mockReturnValue(state)

                getComponentAt.mockReturnValue(undefined)

                const uut = write
                uut(store, address, 0)

                expect(getComponentAt).toHaveBeenCalledWith(state, address)
                expect(writeToComponent).not.toHaveBeenCalled()
            })

            it('should write specified value to component at specified address if component found at that address', () => {
                const expected = {
                    address: 5,
                    value: 8,
                    rangedComponent: buildRangedComponent()
                }
                const store = buildStore()

                getComponentAt.mockReturnValue(expected.rangedComponent)

                const uut = write
                uut(store, expected.address, expected.value)

                expect(writeToComponent).toHaveBeenCalledWith(
                    expected.rangedComponent,
                    expected.address,
                    expected.value)
            })
        })
    })
})
