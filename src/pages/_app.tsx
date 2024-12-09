import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Pemesanan from "../components/Pemesanan";
import TentangWisata from "./wisata";
import Admin from "../loginAdmin/Admin";
import Login from "../loginClient/login";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Halaman Home */}
        <Route path="/tentang-wisata" element={<TentangWisata />} />

        {/* Halaman Pemesanan */}
        <Route path="/pemesanan" element={<Pemesanan />} />

        {/* Halaman Admin */}
        <Route path="/admin" element={<Admin />} />

        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
