import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the people link', () => {
  const { getByText } = render(<App />);
  const link = getByText(/people/i);
  expect(link).toBeInTheDocument();
});
