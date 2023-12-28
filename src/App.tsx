import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './app/contexts/AuthContext';
import { ThemeProvider } from './app/contexts/ThemeProvider';
import { Router } from './router';
import { MembersProvider } from './view/pages/secretary/Members/MembersContext';

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
        <MembersProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router />
            <Toaster />
          </ThemeProvider>
        </MembersProvider>
      </AuthProvider>
      {/* <ReactQueryDevtools position="bottom-right" /> */}
    </QueryClientProvider>
  );
}
