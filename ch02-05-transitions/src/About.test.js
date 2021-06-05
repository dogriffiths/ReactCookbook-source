import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import About from './About'

describe('About component', () => {
  it('should show people by default', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/about' }]}>
        <Route path="/about/:tabId?">
          <About />
        </Route>
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
