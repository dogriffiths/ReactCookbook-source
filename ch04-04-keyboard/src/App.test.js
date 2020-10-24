import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTitle } = render(<App />);
  const arrow = getByTitle('arrow');
  expect(arrow).toBeInTheDocument();
});
