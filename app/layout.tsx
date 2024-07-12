'use client';
import React from 'react';
import Header from './layout/Header';
import './global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import FloatingButtons from './layout/FloatingButtons';

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kor">
      <body>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Header />
            <FloatingButtons />
            {children}
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;
