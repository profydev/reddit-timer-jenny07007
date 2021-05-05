import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import setup from './setup';

test('navigates to search page when button is clicked', () => {
  const { history } = setup();
  const button = screen.getByRole('link', { name: /show me the best time/i });
  userEvent.click(button);
  const title = /Find the best time for a subreddit/i;
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test('navigates to search page when heatmap image is clicked', () => {
  const { history } = setup();
  const heatmapImage = screen.getByAltText(/time-table/i);
  userEvent.click(heatmapImage);
  const title = /Find the best time for a subreddit/i;
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});
