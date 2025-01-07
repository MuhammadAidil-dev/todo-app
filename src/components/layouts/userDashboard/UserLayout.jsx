import { ToastContainer } from 'react-toastify';
import Navbar from '../../fragments/navbar/Navbar';
import { SidebarDesktop } from '../../fragments/navbar/Sidebar';

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-8 md:pt-12 py-4">
        <div className="relative">
          <SidebarDesktop />
          <div className="md:ml-[200px] md:px-8 px-[5%] lg:px-20">
            {children}
          </div>
        </div>
      </main>
      {/* react-toastify */}
      <ToastContainer />
    </>
  );
};

export default UserLayout;
