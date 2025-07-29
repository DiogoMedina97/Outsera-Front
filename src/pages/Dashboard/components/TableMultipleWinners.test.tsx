import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from "@/setupTests";

import TableMultipleWinners from './TableMultipleWinners';
import useFetchMultipleWinners from "../useFetchMultipleWinners";
import type { Mock } from 'vitest';

// --------------------------------------------------

vi.mock("../useFetchMultipleWinners", () => ({
  default: vi.fn(),
}));

describe('Dashboard > TableMultipleWinners', () => {
  it('Should render the table data', async () => {
    (useFetchMultipleWinners as Mock).mockReturnValueOnce({
      data: [{
        year: 1997,
        winnerCount: 2,
      }],
      isLoading: false,
      error: null,
    });

    renderWithProviders(<TableMultipleWinners />);

    await waitFor(() => {
      expect(screen.getByText('1997')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    })
  });
});
