import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import List from './index';

describe('List Page', () => {
  it('Should render the table title', () => {
    renderWithProviders(<List />);
    expect(screen.getByText(/List movies/i)).toBeInTheDocument();
  });
});
