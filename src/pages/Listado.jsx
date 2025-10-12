import React from "react";

const movimientosMock = [
  {
    id: 1,
    descripcion: "Compra supermercado",
    categoria: "alimentacion",
    tipo: "gasto",
    monto: 1500,
    fecha: "2025-10-10",
  },
  {
    id: 2,
    descripcion: "Sueldo",
    categoria: "ingresos",
    tipo: "ingreso",
    monto: 50000,
    fecha: "2025-10-05",
  },
  {
    id: 3,
    descripcion: "Transporte",
    categoria: "transporte",
    tipo: "gasto",
    monto: 2000,
    fecha: "2025-10-07",
  },
];

function Listado() {
  return (
    <div className="listado-movimientos">
      <h2>Mis Movimientos</h2>

      <div className="cards-container">
        {movimientosMock.map((mov) => (
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
        ))}
      </div>
    </div>
  );
}

export default Listado;