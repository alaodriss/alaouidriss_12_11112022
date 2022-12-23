/**
 * The App function returns a div with the className of App, which contains the Accueil component and a
 * div with the className of div-home , which contains the Home component.
 */

import React from "react";
import Navbar from "./Components/Navbar";
import NavbarVer from "./Components/Barverticale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Erreur from "./Pages/Erreur_404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavbarVer />
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path="/user/:userId" element={<Home />} />
          <Route path={"*"} element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
