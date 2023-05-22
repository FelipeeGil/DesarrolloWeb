import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

export const SobreNosotros = () => {
    return (
      <>
        <div>
          <div className="d-flex justify-content-center">
            <h1>Sobre Nosotros</h1>
          </div>
          <div className="d-flex justify-content-center">
            <Image src="https://www.cuerpomente.com/medio/2022/10/24/pasillo-de-un-supermercado_96b081e3_1280x720.jpg"/>
          </div>
          <br></br>
          <br></br>
          <p>
            ¡Bienvenidos a Mercatodo! Somos un supermercado en línea que busca ofrecer a nuestros clientes una experiencia única y cómoda de compras desde la comodidad de su hogar.

            En Mercatodo, nos esforzamos por ofrecer una amplia variedad de productos de alta calidad a precios competitivos. Desde frutas y verduras frescas hasta carnes y productos lácteos, tenemos todo lo que necesita para abastecer su hogar y su despensa.

            Nuestro objetivo es brindar una experiencia de compra sin complicaciones y fácil de usar en nuestra página web. Desde la navegación hasta la selección de productos y el pago, nuestro sitio web es intuitivo y fácil de usar, para que pueda encontrar lo que necesita de manera rápida y sencilla.

            Además, estamos comprometidos con la satisfacción del cliente y nos aseguramos de que cada pedido sea entregado a tiempo y en perfectas condiciones. Siempre nos aseguramos de tener en cuenta las necesidades y preferencias de nuestros clientes, y trabajamos duro para ofrecer un servicio excepcional en todo momento.

            Agradecemos su confianza en Mercatodo y esperamos que tenga una experiencia de compra placentera y satisfactoria con nosotros. ¡Gracias por visitar nuestro sitio web y por elegir Mercatodo como su supermercado en línea de confianza!
          </p>
        </div>
        <br></br>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Nuestro futuro</Accordion.Header>
            <Accordion.Body>
              En Mercatodo, estamos emocionados por lo que el futuro nos depara. Nuestra visión es convertirnos en el mejor supermercado en línea del mercado, ofreciendo una experiencia de compra en línea excepcional y productos de alta calidad a precios competitivos.

              Estamos comprometidos con la innovación y continuamente exploramos nuevas formas de mejorar la experiencia de compra de nuestros clientes. En el futuro, nos enfocaremos en la implementación de tecnologías avanzadas para brindar una experiencia de compra en línea aún más personalizada y eficiente. Por ejemplo, estamos trabajando en mejorar nuestra inteligencia artificial para sugerir productos personalizados basados en las preferencias y necesidades de nuestros clientes.

              Además, seguiremos expandiendo nuestra oferta de productos para brindar una mayor variedad y opciones de compra a nuestros clientes. Estamos en constante comunicación con nuestros proveedores para garantizar que ofrezcamos los productos más frescos y de alta calidad a nuestros clientes.

              También estamos comprometidos con la sostenibilidad y el impacto positivo en el medio ambiente. En el futuro, seguiremos buscando formas de reducir nuestro impacto ambiental y promover prácticas más sostenibles en toda nuestra cadena de suministro.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Politicas de privacidad</Accordion.Header>
            <Accordion.Body>
              En Mercatodo, nos tomamos muy en serio la privacidad y seguridad de nuestros clientes. Por ello, queremos asegurarle que cualquier información personal que nos proporcione será tratada con la máxima confidencialidad y sólo se utilizará para fines comerciales legítimos.

              Para garantizar la privacidad de nuestros clientes, hemos implementado una política de privacidad rigurosa que cumple con todas las regulaciones y leyes pertinentes. Esta política establece cómo recopilamos, almacenamos y utilizamos la información personal de nuestros clientes.

              La información personal que recopilamos incluye su nombre, dirección, número de teléfono, dirección de correo electrónico y otra información relacionada con sus transacciones en nuestro sitio web. Esta información se utiliza únicamente para procesar su pedido y para mejorar su experiencia de compra en línea. No compartimos, vendemos ni alquilamos su información personal a terceros para fines de marketing.

              Además, nos esforzamos por proteger su información personal mediante el uso de medidas de seguridad físicas, electrónicas y administrativas para evitar el acceso no autorizado, la divulgación o la modificación de su información personal.

              Le recomendamos que lea nuestra política de privacidad completa antes de utilizar nuestro sitio web. Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o la privacidad de sus datos, no dude en ponerse en contacto con nosotros a través de nuestro formulario de contacto en línea.

              En Mercatodo, estamos comprometidos en proteger su privacidad y en mantener su confianza en nosotros. ¡Gracias por confiar en nosotros para sus necesidades de compras en línea!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Terminos y condiciones</Accordion.Header>
            <Accordion.Body>
            En Mercatodo, nos comprometemos en brindar una experiencia de compra en línea segura y satisfactoria para nuestros clientes. Por ello, hemos desarrollado un conjunto de términos y condiciones que describen los términos bajo los cuales puede utilizar nuestro sitio web.

            Al utilizar nuestro sitio web, acepta cumplir con nuestros términos y condiciones. Estos términos incluyen información sobre el uso aceptable de nuestro sitio web, las responsabilidades del usuario, la privacidad y la propiedad intelectual.

            Algunos de los puntos importantes de nuestros términos y condiciones incluyen:

            El usuario es responsable de proporcionar información precisa y actualizada al hacer una compra en nuestro sitio web.
            Los usuarios no pueden utilizar nuestro sitio web para fines ilegales, difamatorios, obscenos, ofensivos o fraudulentos.
            Nos reservamos el derecho de cambiar nuestros precios, productos y promociones en cualquier momento.
            Nos reservamos el derecho de cancelar cualquier pedido que consideremos fraudulento o inapropiado.
            La propiedad intelectual, incluyendo marcas comerciales y derechos de autor, relacionados con nuestro sitio web y su contenido son propiedad exclusiva de Mercatodo.
            Es importante que lea nuestros términos y condiciones completos antes de utilizar nuestro sitio web. Si tiene alguna pregunta o inquietud sobre nuestros términos y condiciones, no dude en ponerse en contacto con nosotros a través de nuestro formulario de contacto en línea.

            En Mercatodo, nos esforzamos por ofrecer una experiencia de compra en línea segura y satisfactoria para todos nuestros clientes. ¡Gracias por elegirnos como su supermercado en línea de confianza!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  };
  