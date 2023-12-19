import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Home from "./views/Home";
import PlanetDetails from "./views/PeopleDetails";
import PeopleDetails from "./views/PeopleDetails";
import VehicleDetails from "./views/VehicleDetails";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/people-details" element={<PeopleDetails />} />
            <Route path="/planet-details" element={<PlanetDetails />} />
            <Route path="/starships-details" element={<VehicleDetails />} />

            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
