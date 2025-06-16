import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import IndexPage from "@/pages/index";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/poppins'; // Defaults to weight 400


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,    // Whether animation should happen only once
      mirror: true,   // Repeat animation when scrolling back up
    });
  }, []);
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
    </Routes>
  );
}

export default App;
