import { MemoryRouter } from 'react-router'
import { Route, BrowserRouter } from 'react-router-dom'
import About from './About'

export default {
  title: 'About',
}

export const Basic = () => <About />

export const WithBrowserRouter = () => (
  <BrowserRouter>
    <About />
  </BrowserRouter>
)

export const ToAbout = () => (
  <MemoryRouter initialEntries={[{ pathname: '/about' }]}>
    <Route path="/about/:tabId?">
      <About />
    </Route>
  </MemoryRouter>
)

export const ToAboutOffices = () => (
  <MemoryRouter initialEntries={[{ pathname: '/about/offices' }]}>
    <Route path="/about/:tabId?">
      <About />
    </Route>
  </MemoryRouter>
)
