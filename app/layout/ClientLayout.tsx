'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from 'app/layout/Header';
import FloatingButtons from 'app/layout/FloatingButtons';
import { GlobalProvider } from '@/store/GlobalContext';

const queryClient = new QueryClient();

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <Header />
        <FloatingButtons />
        {children}
      </GlobalProvider>
    </QueryClientProvider>
  );
};

export default ClientLayout;
