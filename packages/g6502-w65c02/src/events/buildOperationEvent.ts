import State from '../State'
import { Event, Bus } from 'g6502-interfaces'
import DataRegisters from '../DataRegisters'
import fetchInstruction from '../fetch/fetchInstruction'
import fetchOperand from '../fetch/fetchOperand'
import getAddressingMode from '../fetch/getAddressingMode'
import getOperation from '../execute/getOperation'

export const buildOperationEvent = (state: State, bus: Bus): Event<State> => {
    //TODO address mirroring - todo in bus/rangedcomponent
    //TODO implement h/w bugs
    const instruction = fetchInstruction(bus, state.pc)
    const operand = fetchOperand(bus, state.pc + 1, instruction.size - 1)
    const dataRegisters = (({ a, x, y }): DataRegisters => ({ a, x, y }))(state)
    const result = getAddressingMode(bus, instruction.addressingMode, operand, dataRegisters, instruction.read)

    const addCycle = result.pageBoundaryCrossed && instruction.addPageBoundaryCycle

    const preExecuteEvent = {
        pc: state.pc + instruction.size,
        cycles: instruction.cycles + (addCycle ? 1 : 0)
    }

    const preExecuteState = {
        ...state,
        ...preExecuteEvent
    }

    const operation = getOperation(instruction)

    return {
        ...preExecuteEvent,
        ...operation(preExecuteState, bus, result.value)
    }
}
