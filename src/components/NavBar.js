import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { logout } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    logout();
    setUser(false);
    <Navigate to={"/"} />;
  };

  return (
    <nav className="bg-black/70 backdrop-blur-md flex justify-center items-center hp-font fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="block">
            <div className="flex gap-4">
              <>
                {user ? (
                  <>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl font-medium h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                      to="/home2"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                      to="/transaction"
                    >
                      Transactions
                    </NavLink>
                    <NavLink
                      to="/profile"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl text-3xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/users"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl text-4xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                    >
                      Users
                    </NavLink>
                    <NavLink
                      to="/login"
                      onClick={handleLogout}
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl text-4xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl text-4xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl text-4xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
                      to="/login"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                      })}
                      className="flex text-gray-300 px-3 py-2 rounded-2xl text-4xl h-[40px] w-[100px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear text-sm"
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
