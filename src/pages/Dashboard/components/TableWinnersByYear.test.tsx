import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from "@/setupTests";

import TableWinnersByYear from './TableWinnersByYear';
import useFetchWinnersByYear from "../useFetchWinnersByYear";
import type { Mock } from 'vitest';

// --------------------------------------------------

vi.mock("../useFetchWinnersByYear", () => ({
  default: vi.fn(),
}));

describe('Dashboard > TableWinnersByYear', () => {
  it('Should render the table data', async () => {
    (useFetchWinnersByYear as Mock).mockReturnValueOnce({
      data: [
        {
          id: 123,
          year: 1997,
          title: "Title Test",
          studios: ["Studio Test 1"],
          producers: ["Producer Test"],
          winner: true,
        }
      ],
      isLoading: false,
      error: null,
      fetch: () => {},
    });

    renderWithProviders(<TableWinnersByYear />);

    await waitFor(() => {
      expect(screen.getByText('123')).toBeInTheDocument();
      expect(screen.getByText('1997')).toBeInTheDocument();
      expect(screen.getByText('Title Test')).toBeInTheDocument();
    })
  });
});
