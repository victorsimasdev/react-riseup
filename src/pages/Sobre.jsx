import { Header } from "../components/Header";
import LogoProjeto from '../assets/images/logo.svg';

function SobrePage() {
  return (
    <div>
      <Header />
      <div className="pt-[80px]">
        <div className="flex mt-[6rem] justify-evenly">
          <div className="w-[37.6rem]">
            <h1 className="text-[color:var(--text,#001F3F)] font-roboto text-[3.31181rem] not-italic font-semibold leading-none">
              Oque é o Mar Alert?
            </h1>
            <p className="text-[color:var(--text,#001F3F)] font-roboto text-[1.65594rem] not-italic font-semibold leading-none">
              O Mar Alert é uma plataforma digital criada para ajudar banhistas
              a aproveitarem a praia com mais segurança e informação. Oferecemos
              dados sobre áreas seguras para banho, alertas de risco, condições
              do mar e orientações úteis, tudo de forma prática e acessível.
            </p>
          </div>
          <img className='h-[20rem]' src={ LogoProjeto } alt="Logo do site" />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default SobrePage;
