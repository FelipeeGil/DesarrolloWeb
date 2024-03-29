import Button from 'react-bootstrap/Button';
//import "./styleContactanos.css"

export const Contactanos = () => {
    return (
      <section>
      <h1>Contactanos</h1>
      <br></br>
      <form>
        <ul class="flex-outer">
          <li>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="nombre"/>
          </li>
          <li>
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="apellido"/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="email@gmail.com"/>
          </li>
          <li>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" placeholder="xxx-xxx-xxxx"/>
          </li>
          <li>
            <label for="message">Message</label>
            <textarea rows="6" id="message" placeholder="mensaje..."></textarea>
          </li>
        </ul>
      <br></br>
      <br></br>
        <section class="btnc">
          <Button variant="outline-secondary" href="/">Comprar</Button>
        </section>
      </form>
    </section>
    );
  };
  