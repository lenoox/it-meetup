import { Outlet } from 'react-router-dom';
import Navbar from '../../../../../../libs/ui/src/lib/navbar/navbar';

export function Layout() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
