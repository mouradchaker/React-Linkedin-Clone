import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Component/Feed/Feed";
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";
import Sidebar from "./Component/Sidebar/Sidebar";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
