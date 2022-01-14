import { testOperation } from '../../helpers/6502'
import sty from '../../../src/operations/sty'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('sty', () => {
            it('should store the value in the y register at the address specified by parameter', () => {
                const bus = buildBus()
                const expected = 0x12
                const address = 0x5678

                testOperation(sty, { y: expected }, {}, address, bus)

                expect(bus.write).toHaveBeenCalledWith(address, expected)
            })
        })
    })
})
