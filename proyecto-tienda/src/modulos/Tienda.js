import { Link } from "react-router-dom";

export const Tienda = () => {
  return (
    <div>
      <h1>Compra</h1>
      <div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" height="100"/>
          <div class="container">
            <h4><b>Osobuco</b></h4>
            <p>$5300</p>
            <button>Agregar</button>
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" height="100"/>
          <div class="container">
            <h4><b>Queso</b></h4>
            <p>$4500</p>
            <button>Agregar</button>
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" height="100"/>
          <div class="container">
            <h4><b>Pan Bimbo</b></h4>
            <p>$2000</p>
            <button>Agregar</button>
          </div>
        </div>
      </div>
      <div>
        <li>
          <Link to="/compra">Pagar</Link>
        </li>
      </div>
    </div>
  );
};
  