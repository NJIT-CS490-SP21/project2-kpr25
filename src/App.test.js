import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('The login is gone after logging In', () => {
  const result = render(<App />);

  const LoginButton = screen.getByText('Login');
  expect(LoginButton).toBeInTheDocument();

  fireEvent.click(LoginButton);
  expect(LoginButton).toBeInTheDocument();

  expect(screen.getByText('Login'));
});

test('The Board Shows up', () => {
  const result = render(<App />);

  const PlayButton = screen.getByText('Play');
  expect(PlayButton).toBeInTheDocument();

  fireEvent.click(PlayButton);
  expect(PlayButton).toBeInTheDocument();

  expect(screen.getByText('Play'));
});

test('The Leaderboard shows Up', () => {
  const result = render(<App />);

  const LeaderboardButton = screen.getByText('Join the Leaderboard');
  expect(LeaderboardButton).toBeInTheDocument();

  fireEvent.click(LeaderboardButton);
  expect(LeaderboardButton).toBeInTheDocument();

  expect(screen.getByText('Join the Leaderboard'));
});
