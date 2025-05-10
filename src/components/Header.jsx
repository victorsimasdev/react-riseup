import { useState, useRef, useEffect } from 'react';
import Logo from '../assets/images/logo-no-background.svg'
import { Link } from 'react-router-dom';

export function Header(){
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
      <header className="w-full h-[80px] bg-[var(--background-header)] flex items-center text-white justify-between px-9 fixed top-0 left-0 w-full z-50">
        <Link to="/"><img className='h-[45px] w-auto cursor-pointerh' src={Logo} alt="Logo do site" /></Link>
        <div className='items-center inline-flex gap-[4rem]'>
          <Link to="/"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>INICIO</button></Link>
          <Link to="/chat-page"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>CHAT</button></Link>
          <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer"
          >
            MAPAS
          </button>
          {isDropdownOpen && (
            <div className="p-[0.25rem] w-[12rem] absolute mt-2 bg-white text-black rounded-[15px] shadow-lg z-50 min-w-[160px] before:content-[''] before:absolute before:top-[-8px] before:left-6 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-white ">
              <Link to="/areas-de-risco" className="block px-4 py-2 hover:bg-blue-100 rounded-t-[15px]">Áreas de risco</Link>
              <Link to="/tabua-de-mares" className="block px-4 py-2 hover:bg-blue-100">Tábua de marés</Link>
              <Link to="/primeiros-socorros" className="block px-4 py-2 hover:bg-blue-100 rounded-b-[15px]">Primeiros Socorros</Link>
            </div>
          )}
        </div>
        <Link to="/"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>SOBRE</button></Link>
        </div>
        <Link to="/login"><button className="flex w-24 h-10 px-15 py-2.5 justify-center items-center gap-2.5 rounded-[15px] bg-[var(--button)] font-bold text-[1.1rem] hover:bg-[#007AB9] border-[3px] border-[#00A6FB] hover:border-[var(--button)] transition-colors duration-300 cursor-pointer">
          Entrar
        </button></Link>
      </header>
  );
}