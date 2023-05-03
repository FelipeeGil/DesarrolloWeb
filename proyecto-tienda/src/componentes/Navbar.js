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
            <Link to="/compra">Compra</Link>
          </li>
          <li>
            <Link to="/contactanos">Contactanos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
