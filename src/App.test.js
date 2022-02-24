import { render, screen } from '@testing-library/react';
import App from './App';
import GameProvider from './GameProvider';

test('passer', () => {
  render(<GameProvider><App /></GameProvider>);
  const linkElement = screen.getByText(/passer/i);
  expect(linkElement).toBeInTheDocument();
});
