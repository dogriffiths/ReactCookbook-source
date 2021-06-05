import { fireEvent, render, screen } from '@testing-library/react'

const stories = require('./InputField.stories')

describe('render stories', () => {
  it('should render all storybook stories without error', () => {
    for (let story in stories) {
      if (story !== 'default') {
        const C = stories[story]
        render(<C />)
      }
    }
  })
  it('should be able to derive label from name', () => {
    const C = stories.Basic
    render(<C />)
    expect(screen.queryByLabelText(/Field 1.*:/)).toBeInTheDocument()
  })
  it('should allow label to be over-ridden', () => {
    const C = stories.WithLabel
    render(<C />)
    expect(
      screen.queryByLabelText(/First field.*:/)
    ).toBeInTheDocument()
  })
  it('should do validation', () => {
    const C = stories.WithOnValidate
    render(<C />)
    const input = screen.getByLabelText(/Field 1.*:/)
    expect(input).toBeInTheDocument()
    expect(
      screen.queryByText('Must be at least 3 chars.')
    ).not.toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'ab' } })
    expect(
      screen.queryByText('Must be at least 3 chars.')
    ).toBeInTheDocument()
  })
  it('should validation when blur event occurs', () => {
    const C = stories.WithOnValidate
    render(<C />)
    const input = screen.getByLabelText(/Field 1.*:/)
    expect(input).toBeInTheDocument()
    expect(
      screen.queryByText('Must be at least 3 chars.')
    ).not.toBeInTheDocument()
    fireEvent.blur(input)
    expect(
      screen.queryByText('Must be at least 3 chars.')
    ).toBeInTheDocument()
  })
})
