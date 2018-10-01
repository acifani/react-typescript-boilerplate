import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import App from '../src/App'

afterEach(cleanup)

test('App', () => {
  const Component: React.ReactElement<typeof App> = <App world="world" />
  const { getAllByText } = render(Component)
  expect(getAllByText(/Hello, world!/)).not.toBeNull()
})
