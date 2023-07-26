import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";
import User from "./Components/User/USer";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
          </Routes>
          <ProtectedRoute path="conta/*" element={<User />} />
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
