import plp from '../../../src/operations/plp'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('plp', () => {
            ;[
                {
                    expectation: {
                        carry: true,
                        zero: true,
                        irqDisable: true,
                        decimal: true,
                        overflow: true,
                        negative: true
                    },
                    status: 0xff
                },
                {
                    expectation: {
                        carry: false,
                        zero: false,
                        irqDisable: false,
                        decimal: false,
                        overflow: false,
                        negative: false
                    },
                    status: 0x30
                },
                {
                    expectation: {
                        carry: false,
                        zero: true,
                        irqDisable: false,
                        decimal: true,
                        overflow: false,
                        negative: true
                    },
                    status: 0xba
                },
                {
                    expectation: {
                        carry: true,
                        zero: false,
                        irqDisable: true,
                        decimal: false,
                        overflow: true,
                        negative: false
                    },
                    status: 0x75
                }
            ].forEach((item) => {
                it('should load data at stack pointer into status register and increment stack pointer', () => {
                    const bus = buildBus()
                    ;(bus.read as jest.Mock).mockReturnValue(item.status)

                    const actual = testOperation(plp, { sp: 0x87 }, {}, 0x00, bus)

                    expect(bus.read).toHaveBeenCalledWith(0x0188)
                    expect(actual).toEqual(
                        expect.objectContaining({
                            sp: 0x88,
                            status: expect.objectContaining(item.expectation)
                        })
                    )
                })
            })
        })
    })
})
