import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useMovimientosContext } from "../contexts/MovimientosContext";

function Ajustes() {
  const { dark, setDark } = useContext(ThemeContext);
  const { resetMovimientos, movimientos } = useMovimientosContext();

  const handleResetData = () => {
    if (window.confirm("¿Estás seguro de que quieres borrar todos los movimientos?")) {
      resetMovimientos();
      alert("Todos los movimientos han sido eliminados.");
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(movimientos, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `movimientos-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ajustes">
      <h2>Ajustes</h2>

      <div className="ajustes-section">
        <h3>Apariencia</h3>
        <div className="setting-item">
          <label htmlFor="theme-toggle">
            <span>Tema oscuro</span>
            <input
              type="checkbox"
              id="theme-toggle"
              checked={dark}
              onChange={(e) => setDark(e.target.checked)}
            />
          </label>
        </div>
      </div>

      <div className="ajustes-section">
        <h3>Datos</h3>
        <div className="setting-item">
          <button onClick={handleExportData} className="btn-secondary">
            Exportar Movimientos (JSON)
          </button>
          <p className="help-text">
            Descarga todos tus movimientos en formato JSON
          </p>
        </div>
        
        <div className="setting-item danger">
          <button onClick={handleResetData} className="btn-danger">
            Borrar Todos los Movimientos
          </button>
          <p className="help-text">
            Esta acción no se puede deshacer
          </p>
        </div>
      </div>

      <div className="ajustes-section">
        <h3>Información</h3>
        <div className="info-item">
          <p><strong>Total de movimientos:</strong> {movimientos.length}</p>
          <p><strong>Versión:</strong> 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

export default Ajustes;