// Home.test.jsx

import React from 'react';
import { render, screen, test, expect } from '@testing-library/react';
import Home from './Home';

test('renders home page correctly', () => {
  render(<Home />);
  const homeElement = screen.getByText(/im home/i);
  expect(homeElement).toBeInTheDocument();
});
