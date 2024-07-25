import React from 'react';
import WeekPage from './week/page';
const HomePage = ({
  children = <WeekPage />,
}: {
  children: React.ReactNode;
}) => {
  return <div>{children}</div>;
};

export default HomePage;
