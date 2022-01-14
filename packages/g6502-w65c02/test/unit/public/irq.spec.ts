import irq from '../../../src/public/irq'
import * as buildIrqEventUnit from '../../../src/events/buildIrqEvent'
import { Store } from 'g6502-interfaces'
import State from '../../../src/State'
import { build6502State } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('irqCommand', () => {
            let buildIrqEvent: jest.SpyInstance

            beforeEach(() => {
                buildIrqEvent = jest.spyOn(buildIrqEventUnit, 'buildIrqEvent')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should build an irq event and write it to the store', () => {
                const expected = { foo: 'bar' }
                buildIrqEvent.mockReturnValue(expected)

                const store = {
                    read: jest.fn(),
                    write: jest.fn()
                } as Store<State>

                const state = build6502State()
                state.status.irqDisable = false
                store.read.mockReturnValue(state)

                const uut = irq
                uut(store)
                
                expect(store.write as jest.Mock).toHaveBeenCalledWith(expected)
            })

            it('should not write event to the store if irqs are disabled', () => {
                const store = {
                    read: jest.fn(),
                    write: jest.fn()
                } as Store<State>

                const state = build6502State()
                state.status.irqDisable = true
                store.read.mockReturnValue(state)

                const uut = irq
                uut(store)
                
                expect(store.write as jest.Mock).not.toHaveBeenCalled()
            })
        })
    })
})