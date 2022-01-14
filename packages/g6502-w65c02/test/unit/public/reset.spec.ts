import reset from '../../../src/public/reset'
import * as buildResetEventUnit from '../../../src/events/buildResetEvent'
import { Store } from 'g6502-interfaces'
import State from '../../../src/State'

describe('Unit', () => {
    describe('6502', () => {
        describe('resetCommand', () => {
            let buildResetEvent: jest.SpyInstance

            beforeEach(() => {
                buildResetEvent = jest.spyOn(buildResetEventUnit, 'buildResetEvent')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should build a reset event and write it to the store', () => {
                const expected = { foo: 'bar' }
                buildResetEvent.mockReturnValue(expected)

                const store = {
                    read: jest.fn(),
                    write: jest.fn()
                } as Store<State>

                const uut = reset
                uut(store)
                
                expect(store.write as jest.Mock).toHaveBeenCalledWith(expected)
            })
        })
    })
})