import { Header } from "../components/Header";
import { SealCheck, Waves, Lifebuoy, FlagPennant } from "@phosphor-icons/react";

function AreasDeRiscoPage() {
  return (
    <div>
      <Header />
      <div className="pt-[120px] flex justify-evenly items-center">
        <div className="w-[35rem] flex flex-col gap-10">
          <div className="flex items-center">
            <SealCheck size={70} color="#00911B" />
            <p className="ml-5 text-[1.1rem]">
              Respeite a sinalização Sempre procure por bandeiras, placas ou
              boias indicativas. Siga as orientações dos salva-vidas e agentes
              de segurança.
            </p>
          </div>
          <div className="flex items-center">
            <Waves size={85} />
            <p className="ml-5 text-[1.1rem]">
              Evite locais com correntezas. Não entre no mar em áreas com ondas
              muito fortes ou águas turvas. Evite nadar próximo a rochas,
              canais, estuários ou desembocaduras de rios.
            </p>
          </div>
          <div className="flex items-center">
            <Lifebuoy size={60} color="var(--alert)" />
            <p className="ml-5 text-[1.1rem]">
              Fique nas áreas monitoradas. Dê preferência a locais com presença
              de guarda-vidas. Observe se há postos de salvamento próximos.
            </p>
          </div>
          <div className="flex items-center">
            <FlagPennant size={33} color="var(--critical-alert)" />
            <p className="ml-5 text-[1.1rem]">
              Como identificar uma área segura <br />
              Bandeira verde: local seguro para banho. <br />
              Bandeira amarela: atenção redobrada. <br />
              Bandeira vermelha: risco elevado – evite entrar na água.
            </p>
          </div>
        </div>
        <div className="border-2 border-[#001F3F] rounded-[15px]">
          <iframe
            className="rounded-[15px] shadow-md w-[35rem] h-[46rem]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15799.286993592916!2d-34.88952950374029!3d-8.11962418292247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1747197547330!5m2!1sen!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Google"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default AreasDeRiscoPage;
