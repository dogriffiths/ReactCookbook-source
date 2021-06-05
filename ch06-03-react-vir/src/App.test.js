import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { container } = render(<App />)
  const dateElement = container.querySelector('.aDate')
  expect(dateElement).toBeInTheDocument()
})
