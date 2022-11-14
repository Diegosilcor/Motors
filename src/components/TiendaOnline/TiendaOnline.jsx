import React from "react";
import "./TiendaOnline.css";
import repuestos from "./repuestos.jpg";


const TiendaOnline = () => {
  return (
    <div className="TiendaOnline">
      <img className="imagen" src={repuestos}  />
      <div className="Visita-nuestra-tienda">
        <h1>Visita Nuestra tienda</h1>
        <p className="Testimonio">
          Contamos con variedad de repuestos para satisfacer todos los
          requerimientos del carro.
          <div className="compraonline">COMPRA ONLINE</div>
        </p>
      </div>
    </div>
  );
};

export default TiendaOnline;
