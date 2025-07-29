import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/setupTests';
import List from './index';

describe('List', () => {
  it('Should render the table title', () => {
    renderWithProviders(<List />);
    expect(screen.getByText(/List movies/i)).toBeInTheDocument();
  });
});
