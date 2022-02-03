import jsr from '../../../src/operations/jsr'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('jsr', () => {
            it('should push the program counter to the stack and set program counter equal to parameter', () => {
                const bus = buildBus()

                const actual = testOperation(jsr, { pc: 0x1234, sp: 0x78 }, {}, 0x4321, bus)

                const write = bus.write as jest.Mock
                expect(write.mock.calls.length).toBe(2)

                expect(write.mock.calls[0]![0]).toEqual(0x0178)
                expect(write.mock.calls[0]![1]).toEqual(0x12)

                expect(write.mock.calls[1]![0]).toEqual(0x0177)
                expect(write.mock.calls[1]![1]).toEqual(0x34 - 1)

                expect(actual.sp).toBe(0x78 - 2)
                expect(actual.pc).toBe(0x4321)
            })
        })
    })
})
