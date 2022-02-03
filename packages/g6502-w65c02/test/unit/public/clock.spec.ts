import clock from '../../../src/public/clock'
import * as buildWaitCycleEventUnit from '../../../src/events/buildWaitCycleEvent'
import * as buildInitialiseEventUnit from '../../../src/events/buildInitialiseEvent'
import * as buildNmiInterruptEventUnit from '../../../src/events/buildNmiInterruptEvent'
import * as buildIrqInterruptEventUnit from '../../../src/events/buildIrqInterruptEvent'
import * as buildOperationEventUnit from '../../../src/events/buildOperationEvent'
import { Store } from 'g6502-interfaces'
import { Bus } from 'g6502-interfaces'
import { build6502State, buildBus, buildStore } from '../../helpers/factories'
import State from '../../../src/State'

describe('Unit', () => {
    describe('6502', () => {
        describe('clock', () => {
            let bus: Bus
            let store: Store<State>
            let buildWaitCycleEvent: jest.SpyInstance
            let buildInitialiseEvent: jest.SpyInstance
            let buildNmiInterruptEvent: jest.SpyInstance
            let buildIrqInterruptEvent: jest.SpyInstance
            let buildOperationEvent: jest.SpyInstance

            beforeEach(() => {
                bus = buildBus()
                store = buildStore()
                buildWaitCycleEvent = jest.spyOn(buildWaitCycleEventUnit, 'buildWaitCycleEvent')
                buildInitialiseEvent = jest.spyOn(buildInitialiseEventUnit, 'buildInitialiseEvent')
                buildNmiInterruptEvent = jest.spyOn(buildNmiInterruptEventUnit, 'buildNmiInterruptEvent')
                buildIrqInterruptEvent = jest.spyOn(buildIrqInterruptEventUnit, 'buildIrqInterruptEvent')
                buildOperationEvent = jest.spyOn(buildOperationEventUnit, 'buildOperationEvent')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should write a wait cycle event to the store if current cycle count is non-zero', () => {
                const state = build6502State()
                state.cycles = 1
                state.initialised = false
                state.nmi = true
                state.irq = true
                ;(store.read as jest.Mock).mockReturnValue(state)

                const expected = { foo: 'bar' }
                buildWaitCycleEvent.mockReturnValue(expected)

                const uut = clock
                uut(bus, store)

                expect(store.write).toHaveBeenCalledWith(expected)
                expect(buildWaitCycleEvent).toHaveBeenCalled()
                expect(buildInitialiseEvent).not.toHaveBeenCalled()
                expect(buildNmiInterruptEvent).not.toHaveBeenCalled()
                expect(buildIrqInterruptEvent).not.toHaveBeenCalled()
                expect(buildOperationEvent).not.toHaveBeenCalled()
            })

            it('should write an initialise event to the store if not yet initialised', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = false
                state.nmi = true
                state.irq = true
                ;(store.read as jest.Mock).mockReturnValue(state)

                const expected = { foo: 'bar' }
                buildInitialiseEvent.mockReturnValue(expected)

                const uut = clock
                uut(bus, store)

                expect(store.write).toHaveBeenCalledWith(expected)
                expect(buildWaitCycleEvent).not.toHaveBeenCalled()
                expect(buildInitialiseEvent).toHaveBeenCalled()
                expect(buildNmiInterruptEvent).not.toHaveBeenCalled()
                expect(buildIrqInterruptEvent).not.toHaveBeenCalled()
                expect(buildOperationEvent).not.toHaveBeenCalled()
            })

            it('should write an nmi event to the store if nmi triggered', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = true
                state.nmi = true
                state.irq = true
                ;(store.read as jest.Mock).mockReturnValue(state)

                const expected = { foo: 'bar' }
                buildNmiInterruptEvent.mockReturnValue(expected)

                const uut = clock
                uut(bus, store)

                expect(store.write).toHaveBeenCalledWith(expected)
                expect(buildWaitCycleEvent).not.toHaveBeenCalled()
                expect(buildInitialiseEvent).not.toHaveBeenCalled()
                expect(buildNmiInterruptEvent).toHaveBeenCalled()
                expect(buildIrqInterruptEvent).not.toHaveBeenCalled()
                expect(buildOperationEvent).not.toHaveBeenCalled()
            })

            it('should write an irq event to the store if irq triggered', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = true
                state.nmi = false
                state.irq = true
                ;(store.read as jest.Mock).mockReturnValue(state)

                const expected = { foo: 'bar' }
                buildIrqInterruptEvent.mockReturnValue(expected)

                const uut = clock
                uut(bus, store)

                expect(store.write).toHaveBeenCalledWith(expected)
                expect(buildWaitCycleEvent).not.toHaveBeenCalled()
                expect(buildInitialiseEvent).not.toHaveBeenCalled()
                expect(buildNmiInterruptEvent).not.toHaveBeenCalled()
                expect(buildIrqInterruptEvent).toHaveBeenCalled()
                expect(buildOperationEvent).not.toHaveBeenCalled()
            })

            it('should write an operation event to the store if initialised with zero cycle count and no interrupts signalled', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = true
                state.nmi = false
                state.irq = false
                ;(store.read as jest.Mock).mockReturnValue(state)

                const expected = { foo: 'bar' }
                buildOperationEvent.mockReturnValue(expected)

                const uut = clock
                uut(bus, store)

                expect(store.write).toHaveBeenCalledWith(expected)
                expect(buildWaitCycleEvent).not.toHaveBeenCalled()
                expect(buildInitialiseEvent).not.toHaveBeenCalled()
                expect(buildNmiInterruptEvent).not.toHaveBeenCalled()
                expect(buildIrqInterruptEvent).not.toHaveBeenCalled()
                expect(buildOperationEvent).toHaveBeenCalled()
            })
        })
    })
})