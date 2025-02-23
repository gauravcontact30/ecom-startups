import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/shared/navbar/NavItems";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
