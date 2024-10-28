import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../../data/constants";
import logo from "../../assets/Logo1.png";
import { useStateContext } from "../../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const location = useLocation();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white m-2 bg-[#32adff] transition-all duration-300 transform translate-x-1 hover:rotate-1 hover:shadow-lg";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 hover:translate-x-1 transition-transform duration-300";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/Dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img src={logo} alt="Logo" className="w-60" />
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ||
                      (location.pathname === "/Dashboard" &&
                        link.name === "Dashboard")
                        ? activeLink
                        : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.displayName}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
