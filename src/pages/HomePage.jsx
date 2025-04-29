import { Header } from '../components/Header';
import HomePageImage from '../assets/images/homePageImage.png';

function HomePage() {
  return (
    <div className='flex justify-center'>
      <Header/>
      <div className="w-[43rem] h-[23.0625rem] pt-[10rem]" >
        <div className='flex'>
          <h1 className='w-[18.5rem] h-[12.75rem] text-[#001F3F] font-roboto text-[8.1875rem] not-italic font-bold leading-[6.25rem]'>Mar Alert</h1>
          <img className='pl-[2rem]' src="src/assets/images/logo.svg" alt="Logo do site" />
        </div>
          <p className='text-[color:var(--text)] font-roboto text-[3.625rem] not-italic font-bold leading-[3.8125rem] pt-[2rem]'>Mais do que um alerta.<br/><span className='text-[color:var(--alert)]'>Um aliado no litoral.</span></p>
      </div>
      <img className='pt-[15rem] pl-[3rem]' src={ HomePageImage } alt="Imagem ilustrada de uma praia" />
    </div>
  )
}

export default HomePage