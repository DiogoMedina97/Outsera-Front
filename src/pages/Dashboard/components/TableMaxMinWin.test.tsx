import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from "@/setupTests";

import TableMaxMinWin from './TableMaxMinWin';
import useFetchMaxMinWin from "../useFetchMaxMinWin";
import type { Mock } from 'vitest';

// --------------------------------------------------

vi.mock("../useFetchMaxMinWin", () => ({
  default: vi.fn(),
}));

describe('Dashboard > TableMaxMinWin', () => {
  it('Should render the table data', async () => {
    (useFetchMaxMinWin as Mock).mockReturnValueOnce({
      data: {
        min: [{
          producer: "Producer Min",
          interval: 1,
          previousWin: 2000,
          followingWin: 2001,
        }],
        max: [{
          producer: "Producer Max",
          interval: 1,
          previousWin: 2000,
          followingWin: 2001,
        }],
      },
      isLoading: false,
      error: null,
    });

    renderWithProviders(<TableMaxMinWin />);

    await waitFor(() => {
      expect(screen.getByText('Producer Min')).toBeInTheDocument();
      expect(screen.getByText('Producer Max')).toBeInTheDocument();
    })
  });
});
