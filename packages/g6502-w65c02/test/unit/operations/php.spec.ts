import php from '../../../src/operations/php'
import { testOperation } from '../../helpers/6502'
import { buildBus } from '../../helpers/factories'

describe('Unit', () => {
    describe('6502', () => {
        describe('php', () => {
            ;[
                {
                    status: {
                        carry: true,
                        zero: true,
                        irqDisable: true,
                        decimal: true,
                        overflow: true,
                        negative: true
                    },
                    expectation: 0xff
                },
                {
                    status: {
                        carry: false,
                        zero: false,
                        irqDisable: false,
                        decimal: false,
                        overflow: false,
                        negative: false
                    },
                    expectation: 0x30
                },
                {
                    status: {
                        carry: false,
                        zero: true,
                        irqDisable: false,
                        decimal: true,
                        overflow: false,
                        negative: true
                    },
                    expectation: 0xba
                },
                {
                    status: {
                        carry: true,
                        zero: false,
                        irqDisable: true,
                        decimal: false,
                        overflow: true,
                        negative: false
                    },
                    expectation: 0x75
                }
            ].forEach((item) => {
                it('should store the value in the status register at the address specified by stack pointer and decrement stack pointer', () => {
                    const bus = buildBus()

                    const actual = testOperation(php, { sp: 0x78 }, item.status, 0x00, bus)

                    expect(bus.write).toHaveBeenCalledWith(0x0178, item.expectation)
                    expect(actual.sp).toBe(0x78 - 1)
                })
            })
        })
    })
})
