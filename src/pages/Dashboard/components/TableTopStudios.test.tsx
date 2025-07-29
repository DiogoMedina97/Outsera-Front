import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from "@/setupTests";

import TableTopStudios from './TableTopStudios';
import useFetchTopStudios from "../useFetchTopStudios";
import type { Mock } from 'vitest';

// --------------------------------------------------

vi.mock("../useFetchTopStudios", () => ({
  default: vi.fn(),
}));

describe('Dashboard > TableTopStudios', () => {
  it('Should render the table data', async () => {
    (useFetchTopStudios as Mock).mockReturnValueOnce({
      data: [
        { name: "Studio 1", winCount: 10 },
        { name: "Studio 2", winCount: 9 },
        { name: "Studio 3", winCount: 8 },
      ],
      isLoading: false,
      error: null,
    });

    renderWithProviders(<TableTopStudios />);

    await waitFor(() => {
      expect(screen.getByText('Studio 1')).toBeInTheDocument();
      expect(screen.getByText('Studio 2')).toBeInTheDocument();
      expect(screen.getByText('Studio 3')).toBeInTheDocument();
    })
  });
});
