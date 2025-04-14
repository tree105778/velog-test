import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Outlet />
      <div>RootLayout</div>
    </>
  );
}

export default RootLayout;
