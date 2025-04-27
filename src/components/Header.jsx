import Logo from '../assets/logo-no-background.svg'
import { Link } from 'react-router-dom';

export function Header(){
  return (
      <header className="w-full h-[80px] bg-[var(--background-header)] flex items-center text-white justify-between px-9">
        <img className='h-[45px] w-auto cursor-pointerh' src={Logo} alt="Logo do site" />
        <div className='items-center inline-flex gap-[40px]'>
          <Link to="/"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>INICIO</button></Link>
          <Link to="/chat-page"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>CHAT</button></Link>
          <Link to="/primeiros-socorros"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>MAPAS</button></Link>
          <Link to="/"><button className='font-black hover:text-[#62CAFF] transition-colors duration-300 cursor-pointer'>SOBRE</button></Link>
        </div>
        <a href="#">
        <Link to="/login"><button className="flex w-24 h-10 px-15 py-2.5 justify-center items-center gap-2.5 rounded-[15px] bg-[var(--button)] font-bold text-[1.1rem] hover:bg-     [#007AB9] border-[3px] border-[#00A6FB] hover:border-[var(--button)] transition-colors duration-300 cursor-pointer">
          Entrar
        </button></Link>
        </a>
      </header>
  );
}