import React from 'react';
import { render, screen } from './helpers/utils/test-utils';
import App from './App';

test('renders learn react link', async () => {
  render(<App />, {});
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
