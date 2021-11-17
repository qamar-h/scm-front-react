import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";
import Classe from "./Page/Dashboard/Classe/Classe";
import User from "./Page/Dashboard/User/User";
import NotFound from "./Page/NotFound";x
import Authenticated from "./Page/Authenticated";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Authenticated><Login /></Authenticated>} />
          <Route path="/dashboard" element={<Authenticated><Dashboard /></Authenticated>} />
          <Route path="/dashboard/users" element={<Authenticated><User /></Authenticated>} />
          <Route path="/dashboard/classes" element={<Authenticated><Classe /></Authenticated>} />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    );
}
