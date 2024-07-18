'use client';
import React, { useEffect } from 'react';
import Header from './layout/Header';
import './global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import FloatingButtons from './layout/FloatingButtons';
import { GlobalProvider } from '@/store/GlobalContext';
import SEO from './layout/SEO';

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kor">
      <SEO />
      <body className="flex justify-center min-h-screen">
        <div className="w-full max-w-[1430px] mx-auto md:p-4">
          <QueryClientProvider client={queryClient}>
            <GlobalProvider>
              <Header />
              <FloatingButtons />
              {children}
            </GlobalProvider>
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
};

export default Layout;
