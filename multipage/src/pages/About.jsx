import { Header } from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="mt-[80px] flex justify-center">
        <div className="pt-[100px] w-150 font-">
          O objetivo deste projeto é aprender e praticar o uso de React Router,
          uma biblioteca que permite a navegação entre páginas em aplicações
          React de forma eficiente. Por meio da implementação de rotas, buscamos
          entender como organizar diferentes componentes em múltiplas páginas,
          como utilizar parâmetros de URL, navegação programática, rotas
          aninhadas e a integração com layouts. Esse conhecimento é fundamental
          para desenvolver aplicações web modernas que ofereçam uma experiência
          fluida ao usuário, sem recarregamento completo da página.
        </div>
      </div>
    </div>
  );
}

export default About;
