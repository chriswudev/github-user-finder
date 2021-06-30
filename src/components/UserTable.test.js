import { render, screen } from '@testing-library/react';
import UserTable from './UserTable';

test('renders UserTable component', () => {
  render(<UserTable />);
  const userTableRoot = screen.getByTestId('usertable-root');
  expect(userTableRoot).toBeInTheDocument();
  const userTableDataGrid = screen.getByRole('grid');
  expect(userTableDataGrid).toBeInTheDocument();
  const userTableAvatarColumn = screen.getByText('Avatar');
  expect(userTableAvatarColumn).toBeInTheDocument();
  const userTableLoginColumn = screen.getByText('Login');
  expect(userTableLoginColumn).toBeInTheDocument();
  const userTableTypeColumn = screen.getByText('Type');
  expect(userTableTypeColumn).toBeInTheDocument();
  const userTableNoRows = screen.getByText('No rows');
  expect(userTableNoRows).toBeInTheDocument();
});
