import nop from '../../../src/operations/nop'
import { build6502State, buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('nop', () => {
            it('should not modify state', () => {
                const previous = build6502State()

                const uut = nop
                const actual = uut(previous, buildBus(), 0x00)

                expect(actual).toEqual({})
            })
        })
    })
})
