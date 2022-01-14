import * as buildInterruptEventUnit from '../../../src/events/buildInterruptEvent'
import { buildIrqInterruptEvent } from '../../../src/events/buildIrqInterruptEvent'
import { build6502State } from '../../helpers/factories'
import { Bus } from 'g6502-interfaces'
import { IRQ_VECTOR, B_IRQ } from '../../../src/constants'

describe('Unit', () => {
    describe('6502', () => {
        describe('buildIrqInterruptEvent', () => {
            let buildInterruptEvent: jest.SpyInstance

            beforeEach(() => {
                buildInterruptEvent = jest.spyOn(buildInterruptEventUnit, 'buildInterruptEvent')
            })

            afterEach(() => {
                jest.resetAllMocks()
            })

            it('should return result of buildInterruptEvent', () => {
                const expected = { foo: 'bar' }
                buildInterruptEvent.mockReturnValue(expected)

                const actual = buildIrqInterruptEvent(build6502State(), {} as Bus)

                expect(actual).toEqual(expected)
            })

            it('should pass irq vector and flag to buildInterruptEvent', () => {
                const state = build6502State()
                const bus = {} as Bus
                buildIrqInterruptEvent(state, bus)

                expect(buildInterruptEvent).toHaveBeenCalledWith(state, bus, IRQ_VECTOR, B_IRQ)
            })
        })
    })
})
