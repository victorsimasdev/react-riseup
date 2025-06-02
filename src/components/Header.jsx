import { useState, useRef, useEffect } from 'react';
import Logo from '../assets/images/logo-no-background.svg'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Header(){
  const [isMapDropdownOpen, setIsMapDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownMapRef = useRef(null);
  const dropdownProfileRef = useRef(null);
  const { isLogged, logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownMapRef.current && !dropdownMapRef.current.contains(event.target)
      ) {
        setIsMapDropdownOpen(false);
      }
      if (
        dropdownProfileRef.current && !dropdownProfileRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full h-[80px] bg-[var(--background-header)] flex items-center text-white justify-between px-9 fixed top-0 left-0 z-50">
      <Link to="/"><img className='h-[45px] w-auto cursor-pointer' src={Logo} alt="Logo do site" /></Link>
      
      <div className='items-center inline-flex gap-[4rem]'>
        <Link to="/"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>INÍCIO</button></Link>
        <Link to="/chat-page"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>CHAT</button></Link>
        
        {/* Dropdown de Mapas */}
        <div className="relative" ref={dropdownMapRef}>
          <button
            onClick={() => setIsMapDropdownOpen(!isMapDropdownOpen)}
            className="font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer"
          >
            MAPAS
          </button>
          {isMapDropdownOpen && (
            <div className="p-[0.25rem] w-[12rem] absolute mt-2 bg-white text-black rounded-[15px] shadow-lg z-50 min-w-[160px] before:content-[''] before:absolute before:top-[-8px] before:left-6 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-white">
              <Link to="/areas-de-risco" className="block px-4 py-2 hover:bg-blue-100 rounded-t-[15px]">Áreas de risco</Link>
              <Link to="/tabua-de-mares" className="block px-4 py-2 hover:bg-blue-100">Tábua de marés</Link>
              <Link to="/primeiros-socorros" className="block px-4 py-2 hover:bg-blue-100 rounded-b-[15px]">Primeiros Socorros</Link>
            </div>
          )}
        </div>

        <Link to="/sobre"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>SOBRE</button></Link>
      </div>

      <div>
        {isLogged ? (
          <div className="relative" ref={dropdownProfileRef}>
            <div
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className='flex items-center gap-4 cursor-pointer select-none'
            >
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="w-11 h-11 rounded-full border-3"
                alt="Foto de perfil"
              />
              <span>Julio Bezerra</span>
            </div>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-[15px] shadow-lg z-50 w-[10rem]">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100 rounded-[15px]"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="flex w-24 h-10 px-15 py-2.5 justify-center items-center gap-2.5 rounded-[15px] bg-[var(--button)] font-bold text-[1.1rem] hover:bg-[#007AB9] border-[3px] border-[#00A6FB] hover:border-[var(--button)] transition-colors duration-300 cursor-pointer">
              Entrar
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
