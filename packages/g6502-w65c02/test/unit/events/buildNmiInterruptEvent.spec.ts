import * as buildInterruptEventUnit from '../../../src/events/buildInterruptEvent'
import { buildNmiInterruptEvent } from '../../../src/events/buildNmiInterruptEvent'
import { build6502State } from '../../helpers/factories'
import { Bus } from 'g6502-interfaces'
import { NMI_VECTOR, B_NMI } from '../../../src/constants'

describe('Unit', () => {
    describe('6502', () => {
        describe('buildNmiInterruptEvent', () => {
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

                const actual = buildNmiInterruptEvent(build6502State(), {} as Bus)

                expect(actual).toEqual(expected)
            })

            it('should pass nmi vector and flag to buildInterruptEvent', () => {
                const state = build6502State()
                const bus = {} as Bus
                buildNmiInterruptEvent(state, bus)

                expect(buildInterruptEvent).toHaveBeenCalledWith(state, bus, NMI_VECTOR, B_NMI)
            })
        })
    })
})
