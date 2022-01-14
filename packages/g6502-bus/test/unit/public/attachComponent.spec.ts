import { buildStore, buildState, buildRangedComponent } from '../../helpers/factories'
import { attachComponent } from '../../../src/public/attachComponent'
import * as canAttachComponentUnit from '../../../src/canAttachComponent'

describe('Bus', () => {
    describe('Unit', () => {
        describe('attachComponent', () => {
            let canAttachComponent: jest.SpyInstance

            beforeEach(() => {
                canAttachComponent = jest.spyOn(canAttachComponentUnit, 'canAttachComponent')
            })

            it('should not write to store if cannot attach specified component', () => {
                const rangedComponent = buildRangedComponent()
                const store = buildStore()
                const state = buildState();
                (store.read as jest.Mock).mockReturnValue(state)

                canAttachComponent.mockReturnValue(false)

                const uut = attachComponent
                uut(store, rangedComponent)

                expect(canAttachComponent).toHaveBeenCalledWith(state, rangedComponent)
                expect(store.write).not.toHaveBeenCalled()
            })

            it('should write component to store if it can be attached', () => {
                const expected = buildRangedComponent()
                const store = buildStore()
                const state = buildState();
                (store.read as jest.Mock).mockReturnValue(state)

                canAttachComponent.mockReturnValue(true)

                const uut = attachComponent
                uut(store, expected)

                expect(store.write).toHaveBeenCalledWith({
                    components: [expected]
                })
            })
        })
    })
})
