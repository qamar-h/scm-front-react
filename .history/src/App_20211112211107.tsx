import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";
import Classe from "./Page/Dashboard/Classe/Classe";
import User from "./Page/Dashboard/User/User";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Routes location="/dashboard">
            <Route path="/users" element={<User />} />
            <Route path="/classes" element={<Classe />} />
          </Routes>
        </Routes>
      </BrowserRouter>
    );
}
