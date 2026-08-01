import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero content', () => {
  render(<App />);
  expect(screen.getByText(/Hello, I'm/i)).toBeInTheDocument();
  expect(screen.getByText(/SURAJ MORE/i)).toBeInTheDocument();
});
