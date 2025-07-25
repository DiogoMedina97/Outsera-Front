import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const renderWithProviders = (element: Children) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{element}</BrowserRouter>
    </QueryClientProvider>
  );
}
