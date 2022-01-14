import inc from '../../../src/operations/inc'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('inc', () => {
            it('should increment value at address specified by parameter', () => {
                const bus = buildBus()
                const address = 0x1234
                const expected = 0x31
                bus.read.mockReturnValue(expected - 1)

                testOperation(inc, {}, {}, address, bus)

                expect(bus.read).toHaveBeenCalledWith(address)
                expect(bus.write).toHaveBeenCalledWith(address, expected)
            })

            it('should set zero flag if incremented value is zero', () => {
                const bus = buildBus()
                const address = 0x1234
                bus.read.mockReturnValue(0xff)

                const actual = testOperation(inc, {}, { zero: false }, address, bus)

                expect(actual.status).toBeDefined()
                expect(actual.status!.zero).toBe(true)
            })

            it('should clear zero and negative flags if incremented value is positive', () => {
                const bus = buildBus()
                const address = 0x1234
                bus.read.mockReturnValue(0x10)

                const actual = testOperation(inc, {}, { zero: true, negative: true }, address, bus)

                expect(actual.status).toBeDefined()
                expect(actual.status!.zero).toBe(false)
                expect(actual.status!.negative).toBe(false)
            })

            it('should set negative flag if incremented value is negative', () => {
                const bus = buildBus()
                const address = 0x1234
                bus.read.mockReturnValue(0xf6)

                const actual = testOperation(inc, {}, { negative: false }, address, bus)

                expect(actual.status).toBeDefined()
                expect(actual.status!.negative).toBe(true)
            })
        })
    })
})
