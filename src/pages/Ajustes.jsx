import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Ajustes() {
  const { dark, setDark } = useContext(ThemeContext);

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
    </div>
  );
}

export default Ajustes;