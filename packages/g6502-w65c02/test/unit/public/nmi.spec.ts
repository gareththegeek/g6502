import nmi from '../../../src/public/nmi'
import * as buildNmiEventUnit from '../../../src/events/buildNmiEvent'
import { Store } from 'g6502-interfaces'
import State from '../../../src/State'

describe('Unit', () => {
    describe('6502', () => {
        describe('nmiCommand', () => {
            let buildNmiEvent: jest.SpyInstance

            beforeEach(() => {
                buildNmiEvent = jest.spyOn(buildNmiEventUnit, 'buildNmiEvent')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should build an nmi event and write it to the store', () => {
                const expected = { foo: 'bar' }
                buildNmiEvent.mockReturnValue(expected)

                const store = {
                    read: jest.fn(),
                    write: jest.fn()
                } as Store<State>

                const uut = nmi
                uut(store)
                
                expect(store.write as jest.Mock).toHaveBeenCalledWith(expected)
            })
        })
    })
})