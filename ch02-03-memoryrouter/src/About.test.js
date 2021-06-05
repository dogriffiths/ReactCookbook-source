import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import About from './About'

describe('About component', () => {
  it.skip('this will break because there is no router', () => {
    render(<About />)

    expect(screen.getByText('Kip Russel')).toBeInTheDocument()
  })
  it('should show people', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )

    expect(screen.getByText('Kip Russel')).toBeInTheDocument()
  })
  it('should show offices if in route', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/about/offices' }]}>
        <About />
      </MemoryRouter>
    )

    expect(screen.getByText('South Dakota')).toBeInTheDocument()
  })
  it('should be able to click to offices', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/about' }]}>
        <About />
      </MemoryRouter>
    )

    expect(screen.getByText('Kip Russel')).toBeInTheDocument()

    fireEvent(
      screen.getByText('Offices'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(screen.getByText('South Dakota')).toBeInTheDocument()
  })
})
