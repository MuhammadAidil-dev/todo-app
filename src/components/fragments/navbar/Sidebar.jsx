import { useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { FaFilter, FaGear } from 'react-icons/fa6';

const SidebarMobile = ({ isOpen, setIsSidebarOpen }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('aside') && !e.target.closest('header')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsSidebarOpen]);

  return (
    <aside
      id="sidebarMobile"
      className={`bg-white w-[200px] absolute top-full text-white duration-200 md:hidden ${
        isOpen ? 'left-0' : '-left-full'
      }`}
    >
      <div className="relative flex flex-col bg-primary mt-8 rounded-md shadow-md h-screen">
        <div className="flex flex-col">
          <div className="absolute -top-8 left-[50%] transform -translate-x-[50%] w-16 h-16 bg-white rounded-full mx-auto flex justify-center items-center">
            <FiUser className="text-primary text-2xl" />
          </div>
          <div className="flex flex-col mt-10 items-center">
            <p className="text-base">Muhammad Aidil</p>
            <p className="text-[10px] font-light">muhammadaidil@gmail.com</p>
          </div>
          <div className="flex flex-col items-center px-4 mt-4 gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <MdDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <BiTask />
              My Task
            </NavLink>
            <NavLink
              to="/tasks-categories"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <FaFilter />
              Task Categories
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <FaGear />
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};

const SidebarDesktop = () => {
  return (
    // sidebar desktop
    <aside
      id="sidebarDesktop"
      className="hidden fixed bg-transparent w-[200px] text-white md:block lg:w-[250px]"
    >
      <div className="relative flex flex-col bg-primary mt-8 rounded-md shadow-md h-screen">
        <div className="flex flex-col">
          <div className="absolute -top-8 left-[50%] transform -translate-x-[50%] w-16 h-16 bg-white rounded-full mx-auto flex justify-center items-center">
            <FiUser className="text-primary text-2xl" />
          </div>
          <div className="flex flex-col mt-10 items-center">
            <p className="text-base">Muhammad Aidil</p>
            <p className="text-[10px] font-light">muhammadaidil@gmail.com</p>
          </div>
          <div className="flex flex-col items-center px-4 mt-4 gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <MdDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <BiTask />
              My Task
            </NavLink>
            <NavLink
              to="/tasks-categories"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <FaFilter />
              Task Categories
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `w-full py-2 px-4 rounded-md flex items-center gap-2 text-xs lg:text-sm hover:bg-white hover:text-primary transition-all ${
                  isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                }`
              }
            >
              <FaGear />
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { SidebarMobile, SidebarDesktop };
