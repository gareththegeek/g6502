import { testOperation } from '../../helpers/6502'
import stx from '../../../src/operations/stx'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('stx', () => {
            it('should store the value in the x register at the address specified by parameter', () => {
                const bus = buildBus()
                const expected = 0x12
                const address = 0x5678

                testOperation(stx, { x: expected }, {}, address, bus)

                expect(bus.write).toHaveBeenCalledWith(address, expected)
            })
        })
    })
})
