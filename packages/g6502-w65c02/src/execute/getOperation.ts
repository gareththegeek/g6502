import Instruction from '../Instruction'
import Operation from '../Operation'
import { getOperationTable } from '../operations/operationTable'

const getOperation = (instruction: Instruction): Operation => {
    const result = getOperationTable()[instruction.mnemonic.toLowerCase()]
    if (result === undefined) {
        throw new Error(`Unknown instruction mnemonic ${instruction.mnemonic.toLowerCase()}`)
    }
    return result
}

export default getOperation
