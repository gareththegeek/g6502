import dec from '../../../src/operations/dec'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('dec', () => {
            it('should decrement value at address specified by parameter', () => {
                const bus = buildBus()
                const address = 0x1234
                const expected = 0x31
                ;(bus.read as jest.Mock).mockReturnValue(expected + 1)

                testOperation(dec, {}, {}, address, bus)

                expect(bus.read).toHaveBeenCalledWith(address)
                expect(bus.write).toHaveBeenCalledWith(address, expected)
            })

            it('should write 0xff (unsigned) if decrement reduces value to -1 (signed)', () => {
                const bus = buildBus()
                const address = 0x1234
                const expected = 0xff
                ;(bus.read as jest.Mock).mockReturnValue(0x0)

                testOperation(dec, {}, {}, address, bus)

                expect(bus.write).toHaveBeenCalledWith(address, expected)
            })

            it('should set zero flag if decremented value is zero', () => {
                const bus = buildBus()
                const address = 0x1234
                ;(bus.read as jest.Mock).mockReturnValue(0x01)

                const actual = testOperation(dec, {}, { zero: false }, address, bus)

                expect(actual.status).toBeDefined()
                expect(actual.status!.zero).toBe(true)
            })

            it('should clear zero and negative flags if decremented value is positive', () => {
                const bus = buildBus()
                const address = 0x1234
                ;(bus.read as jest.Mock).mockReturnValue(0x10)

                const actual = testOperation(dec, {}, { zero: true, negative: true }, address, bus)

                expect(actual.status).toBeDefined()
                expect(actual.status!.zero).toBe(false)
                expect(actual.status!.negative).toBe(false)
            })

            it('should set negative flag if decremented value is negative', () => {
                const bus = buildBus()
                const address = 0x1234
                ;(bus.read as jest.Mock).mockReturnValue(0xf6)

                const actual = testOperation(dec, {}, { negative: false }, address, bus)

                expect(actual.status).toBeDefined()
                expect(actual.status!.negative).toBe(true)
            })
        })
    })
})
