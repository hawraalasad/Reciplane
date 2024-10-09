import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./App.css";
import { Link, Outlet } from "react-router-dom";
import logo from "./media/logo.jpg";
import NavBar from "./components/NavBar";
import UserContext from "./context/UserContext";
import { getToken } from "./api/storage";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <div className="App font-mono flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default App;
