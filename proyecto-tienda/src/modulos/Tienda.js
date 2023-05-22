import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Tienda = () => {
  const [countCarne, setCountCarne] = useState(0);
  const [countLeche, setCountLeche] = useState(0);
  const [countPan, setCountPan] = useState(0);
  return (
    <div>
      <h1 className="d-flex justify-content-center">Compra</h1>
      <br></br>
      <div className="d-flex justify-content-sm-evenly"> 
        <div className="d-flex justify-content-sm-around"> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://vixark.b-cdn.net/lp-i-i-g/carne-de-res-del-%C3%A9xito-1kg-milanesa.jpg" />
            <Card.Body>
              <Card.Title>1kg de Carne de Res</Card.Title>
              <Button variant="secondary" onClick={() => setCountCarne(countCarne - 1)}>-</Button>
              {countCarne}
              <Button variant="secondary" onClick={() => setCountCarne(countCarne + 1)}>+</Button>
            </Card.Body>
          </Card>
        </div>
        <br></br>
        <div className="d-flex justify-content-sm-around"> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0492/2458/1274/products/supermercados_la_vaquita_supervaquita_leche_alqueria_1_litro_ligth_und_leches_1024x1024.jpg?v=1620487363" />
            <Card.Body>
              <Card.Title>1lt de Leche Alquería</Card.Title>
              <Button variant="secondary" onClick={() => setCountLeche(countLeche - 1)}>-</Button>
              {countLeche}
              <Button variant="secondary" onClick={() => setCountLeche(countLeche + 1)}>+</Button>
            </Card.Body>
          </Card>
        </div>
        <br></br>
        <div className="d-flex justify-content-sm-around"> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3Rra1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b0096b356efc0c1ee1d00a6ed2d4460cb2582b92/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/pan-tajado-mua-x450gr.jpg?locale=es" />
            <Card.Body>
              <Card.Title>Pan Tajado Mua</Card.Title>
              <Button variant="secondary" onClick={() => setCountPan(countPan - 1)}>-</Button>
              {countPan}
              <Button variant="secondary" onClick={() => setCountPan(countPan + 1)}>+</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <Button variant="outline-secondary" href="/compra">Comprar</Button>
      </div>
    </div>
  );
};
  