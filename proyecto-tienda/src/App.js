import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./componentes/Footer";
import { Navbar } from "./componentes/Navbar";
import { Inicio } from "./modulos/Inicio";
import { Tienda } from "./modulos/Tienda";
import { Compra } from "./modulos/Compra";
import { Contactanos } from "./modulos/Contactanos";
import { SobreNosotros } from "./modulos/sobreNosotros";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/nosotros" element={<SobreNosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
