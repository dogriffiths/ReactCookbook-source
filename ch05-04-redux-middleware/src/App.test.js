import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const resultsElement = screen.getByText(/No results/i)
  expect(resultsElement).toBeInTheDocument()
})
