import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';

test('renders Searchbar component', () => {
  render(<Searchbar />);
  const searchbarElement = screen.getByTestId('searchbar-root');
  expect(searchbarElement).toBeInTheDocument();
  const searchbarInput = screen.getByPlaceholderText('Search Github Users');
  expect(searchbarInput).toBeInTheDocument();
  const searchbarDivider = screen.getByTestId('searchbar-divider');
  expect(searchbarDivider).toBeInTheDocument();
  const searchbarButton = screen.getByTestId('searchbar-button');
  expect(searchbarButton).toBeInTheDocument();
});
