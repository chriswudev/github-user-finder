import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appRoot = screen.getByTestId('app-root');
  expect(appRoot).toBeInTheDocument();
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
  const rowItems = screen.getAllByTestId('row-item');
  expect(rowItems.length).toBe(2);
  rowItems.forEach((rowItem) => {
    expect(rowItem).toBeInTheDocument();
  });
});
