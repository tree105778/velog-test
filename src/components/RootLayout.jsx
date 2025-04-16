import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Tabs from './Layout/Tabs';

function RootLayout() {
  return (
    <div>
      <Header />
      <Tabs />
      <Outlet />
    </div>
  );
}

export default RootLayout;
