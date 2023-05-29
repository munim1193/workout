import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Mthree from "./pages/Mthree";
import Mfour from "./pages/Mfour";
import Mfive from "./pages/Mfive";

import { M41 } from "./pages/M41";
import { M42 } from "./pages/M42";
import { M43 } from "./pages/M43";
import { M44 } from "./pages/M44";
import { M45 } from "./pages/M45";
import { M46 } from "./pages/M46";
import { M47 } from "./pages/M47";
import { M48 } from "./pages/M48";
import { M49 } from "./pages/M49";
import { M410 } from "./pages/M410";
import { M411 } from "./pages/M411";
import { M412 } from "./pages/M412";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          
          <Route path="/Mthree" element={<Mthree />} />
          <Route path="/Mfour" element={<Mfour />} />
          <Route path="/Mfive" element={<Mfive />} />

          <Route path="/M41" element={<M41 />} />
          <Route path="/M42" element={<M42 />} />
          <Route path="/M43" element={<M43 />} />
          <Route path="/M44" element={<M44 />} />
          <Route path="/M45" element={<M45 />} />
          <Route path="/M46" element={<M46 />} />
          <Route path="/M47" element={<M47 />} />
          <Route path="/M48" element={<M48 />} />
          <Route path="/M49" element={<M49 />} />
          <Route path="/M410" element={<M410 />} />
          <Route path="/M411" element={<M411 />} />
          <Route path="/M412" element={<M412 />} />
        </Routes>
      </BrowserRouter>
      <navbar></navbar>
    </>
  );
}

export default App;
