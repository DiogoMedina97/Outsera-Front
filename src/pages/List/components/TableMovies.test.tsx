import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from "@/setupTests";

import TableMovies from './TableMovies';
import useFetchMovies from "../useFetchMovies";
import type { Mock } from 'vitest';

// --------------------------------------------------

vi.mock("../useFetchMovies", () => ({
  default: vi.fn(),
}));

describe('List > TableMovies', () => {
  it('Should show error message', async () => {
    (useFetchMovies as Mock).mockReturnValueOnce({
      data: [],
      isLoading: false,
      error: new Error("Connection Error"),
    });

    renderWithProviders(<TableMovies />);

    await waitFor(() => {
      expect(screen.getByText('Connection Error')).toBeInTheDocument();
    })
  });
});
