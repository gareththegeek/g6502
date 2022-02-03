import fetchOperand from '../../../src/fetch/fetchOperand'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('fetchOperand', () => {
            it('should read the specified number of bytes from the specified address', () => {
                const address = 0xbeef
                const size = 4
                const expected = [7, 8, 9, 10]
                const bus = buildBus()
                ;(bus.read as jest.Mock).mockImplementation((a: number): number => expected[a - address] as number)

                const uut = fetchOperand
                const actual = uut(bus, address, size)

                expect(actual).toEqual(expected)
            })
        })
    })
})
