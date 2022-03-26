import React from "react";
import './App.css';
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import ChangeColor from "./ChangeColor.jsx"

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
