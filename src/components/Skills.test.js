import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders the added collaboration and styling tools', () => {
  render(<Skills />);

  expect(screen.getByText('Confluence')).toBeInTheDocument();
  expect(screen.getByText('Jira')).toBeInTheDocument();
  expect(screen.getByText('SonarQube')).toBeInTheDocument();
  expect(screen.getByText('SCSS')).toBeInTheDocument();
});
