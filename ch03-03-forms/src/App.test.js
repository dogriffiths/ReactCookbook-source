import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should show the field label on the first form', () => {
    render(<App />)
    expect(screen.queryByLabelText(/Field 1/)).toBeInTheDocument()
  })

  it('should be able to switch to the second form', () => {
    const { container } = render(<App />)
    expect(screen.queryByLabelText(/Field 1/)).toBeInTheDocument()
    fireEvent.change(container.querySelector('select'), {
      target: { value: 'second' },
    })
    expect(screen.getByLabelText(/Address 2.*:/)).toBeInTheDocument()
  })
})
