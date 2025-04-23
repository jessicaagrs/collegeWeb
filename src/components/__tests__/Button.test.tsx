import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

test('renders button with correct text', () => {
  render(<Button />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
