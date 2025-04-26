import Logo from '../assets/logo-no-background.svg'

export function Header(){
  return (
      <header className="w-full h-[80px] bg-[var(--background-header)] flex items-center text-white justify-between px-9">
        <img className='h-[45px] w-auto' src={Logo} alt="Logo do site" />
        <div className='items-center inline-flex gap-[30px]'>
          <button className='font-black hover:text-[#62CAFF]'>BOTAO</button> 
          <button className='font-black hover:text-[#62CAFF]'>BOTAO</button> 
          <button className='font-black hover:text-[#62CAFF]'>BOTAO</button> 
          <button className='font-black hover:text-[#62CAFF]'>BOTAO</button> 
        </div>
        <button className="flex w-24 h-10 px-15 py-2.5 justify-center items-center gap-2.5 rounded-[15px] bg-[var(--button)] font-bold text-[1.1rem]">
          Entrar
        </button>

      </header>
  );
}