import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer">
          <div>
            <ul>
              <li>
                <Link to="/contactanos">Contactanos</Link>
              </li>
              <li>
                <Link to="/nosotros">Politicas de privacidad</Link>
              </li>
              <li>
                <Link to="/nosotros">Terminos y Condiciones</Link>
              </li>
            </ul>
          </div>
          <div>
          Mercatodo Copyright © 2023 - Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
};
