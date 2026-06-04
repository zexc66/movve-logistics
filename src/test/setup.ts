/// <reference types="vitest" />
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

afterEach(() => {
  cleanup()
})

// Add custom matchers to the global scope
declare global {
  namespace Vi {
    interface Assertion extends jest.Matchers<void, any> {}
    interface AsymmetricMatchersContaining extends jest.Matchers<void, any> {}
  }
}