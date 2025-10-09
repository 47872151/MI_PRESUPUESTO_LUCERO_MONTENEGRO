import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" end>🏠 Inicio</NavLink>
      <NavLink to="/nuevo">➕ Nuevo</NavLink>
      <NavLink to="/resumen">📊 Resumen</NavLink>
      <NavLink to="/ajustes">⚙️ Ajustes</NavLink>
    </nav>
  );
}

export default Navbar;