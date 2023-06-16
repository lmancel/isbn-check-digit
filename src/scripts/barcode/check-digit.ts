function getMultiplier(index: number): number {
  return index % 2 ? 3 : 1
}

export default function computeCheckDigit(input: string): number {
  const sum = input
    .replaceAll('-', '')
    .split('')
    .reduce((sum, digit, index) => sum + parseInt(digit) * getMultiplier(index), 0)

  return (10 - (sum % 10)) % 10
}
