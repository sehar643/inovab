import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineBarChart,
  AiOutlineMessage,
  AiOutlineMenu,
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineLogout,
} from "react-icons/ai";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    // {
    //   path: "/dashboard",
    //   icon: <AiOutlineHome className="w-5 h-5" />,
    //   title: "Overview",
    // },
    // {
    //   path: "/dashboard/profile",
    //   icon: <AiOutlineUser className="w-5 h-5" />,
    //   title: "Profile",
    // },
    {
      path: "/dashboard/analytics",
      icon: <AiOutlineBarChart className="w-5 h-5" />,
      title: "Analytics",
    },
    // {
    //   path: "/dashboard/messages",
    //   icon: <AiOutlineMessage className="w-5 h-5" />,
    //   title: "Messages",
    // },
    {
      path: "/dashboard/files",
      icon: <AiOutlineSetting className="w-5 h-5" />,
      title: "Files Management",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <AiOutlineMenu className="h-6 w-6" />
              </button>
              <Link to="/" className="ml-4">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* <div className="flex items-center">
              <Link
                to="/"
                className="hidden md:flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <AiOutlineHome className="h-5 w-5 mr-2" />
                Home
              </Link>

              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    className="w-64 px-4 py-2 pl-10 pr-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search..."
                  />
                  <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <button className="ml-4 p-2 text-gray-600 hover:text-gray-900 relative">
                <AiOutlineBell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div> */}
            <button
              onClick={handleLogout}
              className="ml-4 flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <AiOutlineLogout className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Updated Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-full bg-white shadow-lg transition-all duration-300 z-20 ${
          isSmallScreen
            ? isSidebarOpen
              ? "w-64 translate-x-0"
              : "w-20 -translate-x-20"
            : "w-64"
        }`}
      >
        <div className="py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => isSmallScreen && setIsSidebarOpen(false)}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors ${
                location.pathname === item.path
                  ? "text-blue-600 bg-blue-50"
                  : ""
              }`}
            >
              {item.icon}
              <span
                className={`ml-3 ${isSmallScreen && !isSidebarOpen ? "hidden" : ""}`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Updated Main Content - Remove margin adjustment on small screens */}
      <main
        className={`pt-16 ${
          !isSmallScreen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Add overlay when sidebar is open on small screens */}
      {isSmallScreen && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
