import { NavBar } from "./componentes/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Empresa } from "./pages/Empresa";
import { Contacto } from "./pages/Contacto";
import { Conocenos } from "./pages/Conocenos";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/conocenos" element={<Conocenos />} />
        </Routes>
      </Router>
    </div>
  );
}
