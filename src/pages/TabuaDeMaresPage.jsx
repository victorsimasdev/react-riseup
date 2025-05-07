import { CardTabelaMare } from '../components/CardTabelaMare';
import { Header } from '../components/Header';

function TabuaDeMaresPage(){
  return (
    <div className=''>
      <Header/>
      <h1 className='text-[var(--text)] ml-40 pt-[130px] font-roboto text-[4.3575rem] not-italic font-bold leading-none'>Tábua de Marés</h1>
      <div className='flex w-screen pt-[80px] justify-evenly'>
        <CardTabelaMare />
        <CardTabelaMare />
        <CardTabelaMare />
        <CardTabelaMare />
        <CardTabelaMare />
      </div>
    </div>
  )
}
export default TabuaDeMaresPage