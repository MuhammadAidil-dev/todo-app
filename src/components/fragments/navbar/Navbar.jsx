import { Link } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { SidebarMobile } from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow-md py-4 px-[5%] z-50">
      <NavbarMobile handleSidebar={handleSidebar} />
      <SidebarMobile
        isOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </header>
  );
};

const NavbarMobile = ({ handleSidebar }) => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <button
          onClick={handleSidebar}
          className="cursor-pointer duration-100 hover:text-primary md:hidden"
        >
          <FiMenu className="text-xl" />
        </button>
        <Link to="/">
          <h1 className="text-xl font-bold text-primary">TODO APP</h1>
        </Link>
      </div>
      {/* search task in desktop view */}
      <div className="hidden md:flex items-center bg-background shadow-md rounded-md w-[50%] mx-auto">
        <input
          type="text"
          className="outline-none text-[10px] w-full py-2 px-2 bg-background"
          placeholder="search your task..."
        />
        <button className="bg-primary h-full text-white p-2 rounded-md cursor-pointer">
          <FiSearch />
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-sm">Friday</p>
        <p className="text-[10px] font-light text-primary">13/12/2024</p>
      </div>
    </nav>
  );
};

export default Navbar;
