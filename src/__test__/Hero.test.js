import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import setup from './setup';

test('navigates to search page when button is clicked', () => {
  const { history } = setup();
  const button = screen.getByRole('link', { name: /show me the best time/i });
  userEvent.click(button);
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test('navigates to search page when heatmap image is clicked', () => {
  const { history } = setup();
  const heatmapImage = screen.getByAltText(/time-table/i);
  userEvent.click(heatmapImage);
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});
