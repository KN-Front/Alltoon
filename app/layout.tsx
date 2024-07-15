'use client';
import React from 'react';
import Header from './layout/Header';
import './global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import FloatingButtons from './layout/FloatingButtons';
import { GlobalProvider } from '@/store/GlobalContext';

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kor">
      <body>
        <QueryClientProvider client={queryClient}>
          <GlobalProvider>
            <Header />
            <FloatingButtons />
            {children}
          </GlobalProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;
