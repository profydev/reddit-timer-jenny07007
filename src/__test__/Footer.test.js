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

  const title = /no reactions to your reddit posts?/i;
  expect(screen.getByText(title)).toBeInTheDocument();
});

test('navigates to "https://profy.dev/employers" when profy.dev is clicked', () => {
  setup();
  const externalLink = screen.getByTestId('left-link-in-footer');
  userEvent.click(externalLink);
  expect(screen.getByTestId('left-link-in-footer').href).toBe('https://profy.dev/employers');
});

test('navigates to terms page when terms link is clicked', () => {
  setup('/search/javascript');
  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);
  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
