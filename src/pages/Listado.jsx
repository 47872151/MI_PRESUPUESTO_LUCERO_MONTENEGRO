



import React from "react";
import { useMovimientosContext } from "../contexts/MovimientosContext";

function Listado() {
  const { movimientos } = useMovimientosContext();
  return (
    <div className="listado-movimientos">
      <h2>Mis Movimientos</h2>
      <div className="cards-container">
        {movimientos.length === 0 ? (
          <p>No hay movimientos registrados.</p>
        ) : (
          movimientos.map((mov) => (
            <div key={mov.id} className={`card ${mov.tipo}`}>
              <h3>{mov.descripcion}</h3>
              <p>
                <strong>Categoría:</strong> {mov.categoria}
              </p>
              <p>
                <strong>Tipo:</strong> {mov.tipo}
              </p>
              <p>
                <strong>Monto:</strong> ${mov.monto}
              </p>
              <p>
                <strong>Fecha:</strong> {mov.fecha}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Listado;