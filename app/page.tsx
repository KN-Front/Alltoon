import React from 'react';
import ClientLayout from './layout/ClientLayout';

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return <ClientLayout>{children}</ClientLayout>;
};

export default HomePage;
