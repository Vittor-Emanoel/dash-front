import { Toaster } from '@components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './app/contexts/AuthContext';
import { ThemeProvider } from './app/contexts/ThemeProvider';
import { Router } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <Router />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </AuthProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}
