import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";
import Classe from "./Page/Dashboard/Classe/Classe";
import User from "./Page/Dashboard/User/User";
import NotFound from "./Page/NotFound";

export default function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" render={(props: any) => {

          }} />
          <Route path="/dashboard/users" element={<User />} />
          <Route path="/dashboard/classes" element={<Classe />} />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    );
}
