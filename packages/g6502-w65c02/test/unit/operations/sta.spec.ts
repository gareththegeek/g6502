import sta from '../../../src/operations/sta'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('sta', () => {
            it('should store the value in the accumulator at the address specified by parameter', () => {
                const bus = buildBus()
                const expected = 0x12
                const address = 0x5678

                testOperation(sta, { a: expected }, {}, address, bus)

                expect(bus.write).toHaveBeenCalledWith(address, expected)
            })
        })
    })
})
