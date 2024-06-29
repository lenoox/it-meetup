import { Outlet } from 'react-router-dom';
import Navbar from '../../../../../../libs/ui/src/lib/navbar/navbar';

export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
