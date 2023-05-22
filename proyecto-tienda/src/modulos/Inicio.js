import Carousel from 'react-bootstrap/Carousel'

export const Inicio = () => {
    return (
    <div>
      <br></br>
      <h1 className="d-flex justify-content-center">Mercatodo</h1>
      
      <br></br>
      <p>
        ¡Bienvenidos a Mercatodo! Somos un supermercado en línea que busca ofrecer a nuestros clientes una experiencia única y cómoda de compras desde la comodidad de su hogar.

        En Mercatodo, nos esforzamos por ofrecer una amplia variedad de productos de alta calidad a precios competitivos. Desde frutas y verduras frescas hasta carnes y productos lácteos, tenemos todo lo que necesita para abastecer su hogar y su despensa.

        Nuestro objetivo es brindar una experiencia de compra sin complicaciones y fácil de usar en nuestra página web. Desde la navegación hasta la selección de productos y el pago, nuestro sitio web es intuitivo y fácil de usar, para que pueda encontrar lo que necesita de manera rápida y sencilla.
      </p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.cuerpomente.com/medio/2022/10/24/pasillo-de-un-supermercado_96b081e3_1280x720.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eu-central-1.linodeobjects.com/contactcenterhub/2022/10/supermercados.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.semana.com/resizer/UC3DXSTJkmXIc8b4nXYrfrZ-Weo=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/VLXSB2GLSFHATJWRUQGP6ESBRQ.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <br></br>
      <br></br>
      <div>
        <h2 className="d-flex justify-content-center">Nuestras especializaciones</h2>
        <br></br>
        <div className="d-flex justify-content-sm-evenly"> 
        <div>
          <h4>Carnes</h4>
          <img src="https://i.blogs.es/a6a88d/1366_20001/1366_2000.jpg" alt="carousel" height="300"></img>
        </div>
        <div>
          <h4>Lacteos</h4>
          <img src="https://as01.epimg.net/deporteyvida/imagenes/2019/05/29/portada/1559132933_784891_1559133012_noticia_normal.jpg" alt="carousel" height="300"></img>
        </div>
        <div>
          <h4>Pan</h4>
          <img src="https://a.storyblok.com/f/120479/6d797da1b3/mitos-pan-1.jpg" alt="carousel" height="300"></img>
        </div>
        </div>  
      </div>
    </div>
  );
};
  