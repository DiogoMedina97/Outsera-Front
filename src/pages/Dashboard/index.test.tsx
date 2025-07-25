import { screen } from '@testing-library/react';
import { renderWithProviders } from "@tests/test-utils";
import Dashboard from './index';

describe('Dashboard Page', () => {
  it('Should render the table titles', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText(/List years with multiple winners/i)).toBeInTheDocument();
    expect(screen.getByText(/Top 3 studios with winners/i)).toBeInTheDocument();
    expect(screen.getByText(/Producers with longest and shortest interval between wins/i)).toBeInTheDocument();
    expect(screen.getByText(/List movie winners by year/i)).toBeInTheDocument();
  });
});
