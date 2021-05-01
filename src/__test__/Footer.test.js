import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );

  const footer = screen.getByRole('contentinfo');
  return { footer };
};

test('navigates to home page when logo is clicked', () => {
  const { footer } = setup('/search/javascript');

  const logoLink = within(footer).getByRole('link', { name: 'sign.svg' });
  userEvent.click(logoLink);

  const title = /no reactions to your reddit posts?/i;
  expect(screen.getByText(title)).toBeInTheDocument();
});

test('navigates to "https://profy.dev/employers" when profy.dev is clicked', () => {
  const { footer } = setup();
  const externalLink = within(footer).getByRole('link', { name: 'profy.dev' });
  userEvent.click(externalLink);

  expect(externalLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});

test('navigates to terms page when terms link is clicked', () => {
  const { footer } = setup('/search/javascript');

  const termsLink = within(footer).getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);
  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
