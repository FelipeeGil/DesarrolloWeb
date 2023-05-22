import { MDBFooter } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';

export const Footer = () => {
  return (
    <>
      <br></br>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
          <div class="footer">
            <div>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Nav.Link href="/contactanos">Contactanos</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/nosotros">Politicas de privacidad</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/nosotros">Terminos y Condiciones</Nav.Link>
                </li>
              </ul>
            </div>
            <div>
            Mercatodo Copyright © 2023 - Todos los derechos reservados
            </div>
          </div>
      </MDBFooter>
    </>
  );
};
