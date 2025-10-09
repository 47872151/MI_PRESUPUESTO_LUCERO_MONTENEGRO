import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="contenido">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}

export default Layout;