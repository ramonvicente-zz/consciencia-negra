import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders \'Coming soon\' page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/coming/i);
  expect(linkElement).toBeInTheDocument();
});
