import { expect, test } from 'vitest'
import { Button } from './Button'

test('Button renders children', () => {
  const button = Button({ children: 'Primary Button' })
  expect(button).toContain('Primary Button')
})