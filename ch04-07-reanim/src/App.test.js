import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const addButton = screen.getByText(/add/i)
  expect(addButton).toBeInTheDocument()
})
