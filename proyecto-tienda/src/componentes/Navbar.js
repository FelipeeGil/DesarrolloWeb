import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/tienda">Tienda</Link>
          </li>
          <li>
            <Link to="/contactanos">Contactanos</Link>
          </li>
          <li>
            <Link to="/nosotros">Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
