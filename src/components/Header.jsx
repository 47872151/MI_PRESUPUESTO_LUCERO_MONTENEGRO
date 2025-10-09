function Header() {
  return (
    <header className="header">
      <h1>Mi Presupuesto 💰</h1>
      {/* toggle dark/light lo conectarás después al Context de Paloma */}
      <button className="toggle">🌙 / ☀️</button>
    </header>
  );
}

export default Header;