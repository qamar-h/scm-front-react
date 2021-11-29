import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";
import Classe from "./Page/Dashboard/Classe/Classe";
import User from "./Page/Dashboard/User/User";
import NotFound from "./Page/NotFound";
import Authenticated from "./Auth/Authenticated";
import AuthContext from './Auth/Context';
import Profile from "./Page/Dashboard/Profile/Profile";
import reducer from "./Auth/reducer";
import initState from "./Auth/state";

export default function App() {

    const [authState, authDispatch] = useReducer(reducer, initState);
  
    return (
      <AuthContext.Provider value={[authState, authDispatch]} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authenticated><Login /></Authenticated>} />
            <Route path="/login" element={<Authenticated><Login /></Authenticated>} />
            <Route path="/dashboard" element={<Authenticated><Dashboard /></Authenticated>} />
            <Route path="/dashboard/profil" element={<Authenticated><Profile /></Authenticated>} />
            <Route path="/dashboard/users" element={<Authenticated><User /></Authenticated>} />
            <Route path="/dashboard/classes" element={<Authenticated><Classe /></Authenticated>} />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    );
}
