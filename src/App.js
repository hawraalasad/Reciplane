import React, { useEffect, useState } from "react";

import "./App.css";
import { Link, Outlet } from "react-router-dom";
import logo from "./media/logo.jpg";
import NavBar from "./components/NavBar";
import UserContext from "./context/UserContext";
import { getToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono  ">
        <NavBar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
