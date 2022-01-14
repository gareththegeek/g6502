const getStackAddress = (sp: number): number => 0x100 | sp

export default getStackAddress
