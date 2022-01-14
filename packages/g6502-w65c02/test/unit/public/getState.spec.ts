import getState from '../../../src/public/getState'
import { Store } from 'g6502-interfaces'
import { build6502State } from '../../helpers/factories'
import State from '../../../src/State'

describe('Unit', () => {
    describe('6502', () => {
        describe('state', () => {
            it('should return contents of Store', () => {
                const expected = build6502State()
                const store = {
                    read: jest.fn(),
                    write: jest.fn()
                } as Store<State>

                store.read.mockReturnValue(expected)

                const uut = getState
                const actual = uut(store)
                
                expect(actual).toEqual(expected)
            })
        })
    })
})