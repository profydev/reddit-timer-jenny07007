import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setup = (initialPath = '/') => render(
  <MemoryRouter initialEntries={[initialPath]}>
    <App />
  </MemoryRouter>,
);

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');
  const logoLink = screen.getByRole('link', { name: 'sign.svg' });
  userEvent.click(logoLink);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test('navigates to "https://profy.dev/employers" when profy.dev is clicked', () => {
  setup();
  const externalLink = screen.getByRole('link', { name: 'profy.dev' });
  userEvent.click(externalLink);
  expect(screen.getByText('profy.dev').href).toBe('https://profy.dev/employers');
});

test('navigates to terms page when terms link is clicked', () => {
  setup('/search/javascript');
  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);
  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
