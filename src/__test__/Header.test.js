import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import setup from './setup';

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');
  const logoLink = screen.getByRole('link', { name: /logo/i });
  // screen.debug();
  userEvent.click(logoLink);

  const title = /no reactions to your reddit posts?/i;
  expect(screen.getByText(title)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  const { history } = setup();
  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test.each`
 link | hash
 ${'About'} | ${'#about'}
 ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" section when "$link" link is clicked', ({ link, hash }) => {
  const { history } = setup('/search/javascript');
  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);

  const title = /no reactions to your reddit posts?/i;
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(history.location.hash).toEqual(hash);
});
