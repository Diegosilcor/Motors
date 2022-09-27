import Carousel from 'react-bootstrap/Carousel';

function CarouselIndex() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://acortar.link/HV2FAj"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ultima tecnologia en sistemas de verificaciones de fallos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://acortar.link/vxBEW6"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>Contamos con tecnicos expertos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://acortar.link/rvFT2o"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Inspeccion visual y computarizada del vehiculo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselIndex;