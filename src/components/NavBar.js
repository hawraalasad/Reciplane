import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { logout } from "../api/auth";
import UserContext from "../context/UserContext";

const continentColors = {
  "/": { button: "bg-white text-[#37B0E6]" },
  "/Asia": { button: "bg-[#e63946] text-white" },
  "/Africa": { button: "bg-[#016450] text-[#f0c300]" },
  "/Europe": { button: "bg-[#1e3a8a] text-white" },
  "/NorthAmerica": { button: "bg-white text-[#FF0000]" },
  "/SouthAmerica": { button: "bg-black text-[#00FF00]" },
  "/Australia": { button: "bg-black text-[#FFD700]" },
  "/Antarctica": { button: "bg-[#87CEEB] text-white" },
};

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentColors, setCurrentColors] = useState(continentColors["/"]);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const newColors =
      continentColors[location.pathname] || continentColors["/"];
    setCurrentColors(newColors);
  }, [location.pathname]);

  const navItemStyle = `inline-flex items-center justify-center px-4 py-2 rounded-full ${currentColors.button} hover:opacity-80 text-sm font-medium h-10`;

  return (
    <motion.nav
      className="flex justify-center items-center hp-font z-[9998] px-4 py-2 absolute top-0 left-0 right-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex space-x-4 items-center">
        <motion.div className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navItemStyle} ${isActive ? "font-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `${navItemStyle} ${isActive ? "font-bold" : ""}`
              }
            >
              Recipes
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `${navItemStyle} ${isActive ? "font-bold" : ""}`
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className={navItemStyle}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${navItemStyle} ${isActive ? "font-bold" : ""}`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${navItemStyle} ${isActive ? "font-bold" : ""}`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </motion.div>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
