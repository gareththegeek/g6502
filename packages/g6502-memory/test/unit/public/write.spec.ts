import { buildStore, buildState } from '../../helpers/factories'
import { write } from '../../../src/public/write'
import * as buildWriteStateUnit from '../../../src/events/buildWriteState'

describe('Memory', () => {
    describe('Unit', () => {
        describe('write', () => {
            let buildWriteState: jest.SpyInstance

            beforeEach(() => {
                buildWriteState = jest.spyOn(buildWriteStateUnit, 'buildWriteState')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should write specified address and value to memory', () => {
                const address = 4
                const value = 7
                const state = buildState()
                const store = buildStore()
                state.pages[0] = { data: [] }
                ;(store.read as jest.Mock).mockReturnValue(state)

                const uut = write
                uut(store, address, value)

                expect(buildWriteState).toHaveBeenCalledWith(state, address, value)
            })
        })
    })
})
