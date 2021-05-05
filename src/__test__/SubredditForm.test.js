// import userEvent from '@testing-library/user-event';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_SUBREDDIT } from '../constants/subreddit';
import setup from './setup';

test('Url changes when submitting the form', () => {
  const { history } = setup('/search/react');
  const searchInput = screen.getByPlaceholderText(DEFAULT_SUBREDDIT);
  expect(searchInput.value).toBe('react');

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'threejs');
  expect(searchInput.value).toBe('threejs');

  const searchButton = screen.getByRole('button', { name: /search/i });
  userEvent.click(searchButton);
  expect(history.location.pathname).toEqual('/search/threejs');
});

test('input value changes to default when clicking the Search Link in header', async () => {
  setup('/search/react');
  const searchInput = screen.getByRole('textbox');
  const header = screen.getByRole('banner');
  const searchLink = within(header).getByRole('link', { name: /Search/ });
  userEvent.click(searchLink);
  await new Promise((r) => setTimeout(() => r(), 0));
  expect(searchInput.value).toBe(DEFAULT_SUBREDDIT);
});
