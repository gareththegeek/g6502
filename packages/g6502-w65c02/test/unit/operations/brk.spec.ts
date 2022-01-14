import brk from '../../../src/operations/brk'
import { IRQ_VECTOR, B_BRK } from '../../../src/constants'
import { build6502State, buildBus } from '../../helpers/factories'
import * as buildInterruptEventUnit from '../../../src/events/buildInterruptEvent'

describe('Unit', () => {
    describe('6502', () => {
        describe('brk', () => {
            let buildInterruptEvent: jest.SpyInstance

            beforeEach(() => {
                buildInterruptEvent = jest.spyOn(buildInterruptEventUnit, 'buildInterruptEvent')
            })

            afterEach(() => {
                jest.clearAllMocks()
            })

            it('should perform an interrupt with the IRQ vector and break flag set', () => {
                const previous = build6502State()
                previous.status.break = false
                const expected = build6502State()
                expected.status.break = true
                buildInterruptEvent.mockReturnValue(expected)
                const bus = buildBus()

                const uut = brk
                const actual = uut(previous, bus, 0x00)

                expect(buildInterruptEvent).toBeCalledWith(previous, bus, IRQ_VECTOR, B_BRK)
                expect(actual).toEqual(expected)
            })
        })
    })
})
