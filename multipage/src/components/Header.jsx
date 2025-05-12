import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full h-[80px] bg-[#333] flex items-center text-white font-bold justify-center gap-20 px-9 fixed top-0 left-0 w-full z-50">
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </header>
  );
}
