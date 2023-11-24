import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
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
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router />
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
      {/* <ReactQueryDevtools position="bottom-right"  /> */}
    </QueryClientProvider>
  );
}
