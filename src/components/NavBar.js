import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { logout } from "../api/auth";
import UserContext from "../context/UserContext";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.paddingTop = "64px";
    return () => {
      document.body.style.paddingTop = "0px";
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUser(false);
    navigate("/");
  };

  return (
    <nav className="bg-[#37B0E6] backdrop-blur-md flex justify-center items-center hp-font fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="block">
            <div className="flex gap-4">
              <>
                {user ? (
                  <>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                      to="/recipes"
                    >
                      Recipes
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                      to="/profile"
                    >
                      Profile
                    </NavLink>

                    <NavLink
                      to="/login"
                      onClick={handleLogout}
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                      to="/recipes"
                    >
                      Recipes
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                      to="/login"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "bold",
                        color: isActive ? "#ffffff" : "#37B0E6",
                        background: isActive ? "#2980B9" : "#ffffff",
                      })}
                      className="flex px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:bg-[#f0f0f0] transition-all duration-100 ease-linear text-sm hover:scale-105"
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
