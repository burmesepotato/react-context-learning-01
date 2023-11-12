import { useState } from "react";
import Dashboard from "./views/Dashboard";
import { DashboardContext } from "@/contexts";
import { User } from "@/types";

import "./App.css";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [user] = useState<User>({
    username: "burmesepotato",
    fullname: "Just A Potato",
    photo: "https://avatars.githubusercontent.com/u/24710010?v=4",
  });

  return (
    <>
      <div className="flex gap-4 justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center font-bold">Vite + React</h1>
      <div className="card">
        <DashboardContext.Provider value={user}>
          <Dashboard />
        </DashboardContext.Provider>
      </div>
    </>
  );
}

export default App;
