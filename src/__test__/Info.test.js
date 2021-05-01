import { screen, within } from '@testing-library/react';
import setup from './setup';

test('navigates to profy home and employers page', () => {
  setup();
  const aboutSection = screen.getAllByRole('article')[1];
  const profyLink = within(aboutSection).getByRole('link', { name: /profy\.dev/i });
  expect(profyLink.getAttribute('href')).toEqual('https://profy.dev');

  const moreInfoLink = within(aboutSection).getByRole('link', { name: /click here for more information/i });
  expect(moreInfoLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});
