import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { logout } from "../api/auth";
import UserContext from "../context/UserContext";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/");
  };

  const continentColors = {
    "/": { bg: "bg-[#37B0E6]", button: "bg-white text-[#37B0E6]" },
    "/Asia": { bg: "bg-[#fff7ed]", button: "bg-[#e63946] text-white" },
    "/Africa": { bg: "bg-[#FFA500]", button: "bg-black text-[#FFA500]" },
    "/Europe": { bg: "bg-[#0000FF]", button: "bg-white text-[#0000FF]" },
    "/NorthAmerica": { bg: "bg-[#FF0000]", button: "bg-white text-[#FF0000]" },
    "/SouthAmerica": { bg: "bg-[#00FF00]", button: "bg-black text-[#00FF00]" },
    "/Australia": { bg: "bg-[#FFD700]", button: "bg-black text-[#FFD700]" },
    "/Antarctica": { bg: "bg-[#FFFFFF]", button: "bg-[#87CEEB] text-white" },
  };

  const { bg, button } =
    continentColors[location.pathname] || continentColors["/"];

  const navItemStyle = `inline-flex items-center justify-center px-4 py-2 rounded-full ${button} hover:opacity-80 text-sm font-medium h-10`;

  return (
    <nav
      className={`${bg} backdrop-blur-md flex justify-center items-center hp-font fixed top-0 left-0 right-0 z-50 px-4 py-2`}
    >
      <ul className="flex space-x-4 items-center">
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
                to="/signup"
                className={({ isActive }) =>
                  `${navItemStyle} ${isActive ? "font-bold" : ""}`
                }
              >
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
