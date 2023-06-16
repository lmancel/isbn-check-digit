import { describe, it, expect } from 'vitest'

import computeCheckDigit from '../check-digit'

const EXPECTED_RESULTS: [string, number][] = [
  ['978014300723', 4], // default example
  ['978054300723', 0], // intermediate result is 10
  ['978-0-306-40615', 7] // contains dashes
]

describe('ISBN check digit computation', () => {
  it('should compute properly', () => {
    EXPECTED_RESULTS.forEach(([input, output]) => {
      expect(computeCheckDigit(input)).toBe(output)
    })
  })
})
