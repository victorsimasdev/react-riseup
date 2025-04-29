import { CardPrimeirosSocorros } from '../components/CardPrimeirosSocorros';
import { Header } from '../components/Header';

function PrimeirosSocorrosPage() {
  return (
    <div>
      <Header/>
      <div className='pt-20 flex justify-center gap-10'>
        <CardPrimeirosSocorros
          src={"../src/assets/images/primeiros-socorros/queimadura.svg"}
          title={"Queimadura por agua viva"}
          description={"Não esfregue a pele.\nLave com agua do mar (nunca doce).\nAplique vinagre ou solução de bicarbonato."}
        />
        <CardPrimeirosSocorros
          src={"../src/assets/images/primeiros-socorros/queimadura.svg"}
          title={"Queimadura por agua viva"}
          description={"Não esfregue a pele.\nLave com agua do mar (nunca doce).\nAplique vinagre ou solução de bicarbonato."}
        />
        <CardPrimeirosSocorros
          src={"../src/assets/images/primeiros-socorros/queimadura.svg"}
          title={"Queimadura por agua viva"}
          description={"Não esfregue a pele.\nLave com agua do mar (nunca doce).\nAplique vinagre ou solução de bicarbonato."}
        />
      </div>
    </div>
  )
}

export default PrimeirosSocorrosPage
