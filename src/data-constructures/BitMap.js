export const BIT_SIZE = 32

// 设置位的值
export function setBit(bitMap, bit) {
  const arrIndex = Math.floor(bit / BIT_SIZE)
  const bitIndex = Math.floor(bit % BIT_SIZE)
  bitMap[arrIndex] |= (1 << bitIndex)
}

// 读取位的值
export function getBit(bitMap, bit) {
  const arrIndex = Math.floor(bit / BIT_SIZE)
  const bitIndex = Math.floor(bit % BIT_SIZE)
  return bitMap[arrIndex] & (1 << bitIndex)
}

export class BitMap {
  constructor(size) {
    this._bitArr = Array.from({
      length: size
    }, () => 0)
  }

  addMember(member) {
    setBit(this._bitArr, member)
  }

  isExist(member) {
    const isExist = getBit(this._bitArr, member)
    return Boolean(isExist)
  }
}
