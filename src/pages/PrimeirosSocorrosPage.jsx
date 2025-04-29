import { CardPrimeirosSocorros } from '../components/CardPrimeirosSocorros';
import { Header } from '../components/Header';

function PrimeirosSocorrosPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <h1 className='mt-[100px] text-[color:var(--text)] font-roboto text-[2.5rem] not-italic font-bold leading-none flex justify-center'>Guia de Primeiros Socorros</h1>
      <div className='flex flex-1 justify-center items-end gap-10'>
        <CardPrimeirosSocorros
          cardColor={'#CFDBC8'}
          src={"../assets/images/primeiros-socorros/queimadura.png"}
          title={"Queimadura por agua viva"}
          description={"Não esfregue a pele.\nLave com agua do mar (nunca doce).\nAplique vinagre ou solução de bicarbonato."}
        />
        <CardPrimeirosSocorros
          cardColor={'#6FA097'}
          src={"../assets/images/primeiros-socorros/afogamento.png"}
          title={"Afogamento"}
          description={"Ligue para os serviços de emergência.\nSe souber nadar e for seguro, tente alcançar a vitima com um objeto (corda, prancha)."}
          reverse
        />
        <CardPrimeirosSocorros
          cardColor={'#FEEFD2'}
          src={"../assets/images/primeiros-socorros/insolacao.png"}
          title={"Insolação"}
          description={"Leve a vitima para a sombra.\nOfereça água e faça compressas frias.\nNão estoure bolhas e procure um posto de saúde se os sintomas forem graves."}
        />
      </div>
    </div>
  )
}

export default PrimeirosSocorrosPage
