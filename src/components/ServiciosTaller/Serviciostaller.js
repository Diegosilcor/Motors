import React from "react";
import "./Serviciostaller.css";

const ServiciosTaller = () => {
  return (
    <>
      <div className="electronica">
        ELECTRONICA
        
          <ul>
            <li>Diagnostico de sistemas</li>
            <li>Electricidad</li>
            <li>Baterias</li>
          </ul>
        
      </div>
      <div className="mecanica">
        MECANICA
        <ul>
          <li>Mecanica Ligera</li>
          <li>Filtros y Correas</li>
          <li>Cambios de Aceite</li>
        </ul>
      </div>
      <div className="inyeccion">
        INYECCION
        <ul>
          <li>Inyeccion de Gasolina</li>
          <li>Inyeccion de Diesel</li>
          <li>Limpieza de Inyectores</li>
        </ul>
      </div>
      <div className="colision">
        COLISION
        <ul>
          <li>Reparacion de Colisiones</li>
          <li>Reparacion de Colisiones</li>
          <li>Reparacion de Colisiones</li>
        </ul>
      </div>
      <div className="AC">
        AIRE ACONDICIONADO
        <ul>
          <li>Reemplazo de Filtros</li>
          <li>Carga de Gas</li>
          <li>Reparacion de AC</li>
        </ul>
      </div>
      <div className="limpieza">
        LIMPIEZA
        <ul>
          <li>Limpieza de interiores </li>
          <li>Desmantelamiento de Carro para limpieza profunda</li>
          <li>Limpieza de Chasis</li>
        </ul>
      </div>
    </>
  );
};

export default ServiciosTaller;
