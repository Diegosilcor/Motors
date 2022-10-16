import Carousel from 'react-bootstrap/Carousel';

function CarouselIndex() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/aa2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Revision sistemas de aire acondicionado de ultima generacion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Mecanica.jpeg"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>Mecanica General</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/decontaminacion.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Decontaminacion y limpeiza del vehiculo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselIndex;