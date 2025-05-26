import { CardTabelaMare } from '../components/CardTabelaMare';
import { Header } from '../components/Header';


const dadosMares = [
  {
    dia: 25,
    semana: "DOM",
    mares: [
      { hora: "02:06", altura: 2.28 },
      { hora: "08:21", altura: 0.20 },
      { hora: "14:38", altura: 2.41 },
      { hora: "20:53", altura: 0.24 }
    ]
  },
  {
    dia: 26,
    semana: "SEG",
    mares: [
      { hora: "02:55", altura: 2.37 },
      { hora: "09:12", altura: 0.11 },
      { hora: "15:23", altura: 2.44 },
      { hora: "21:36", altura: 0.24 }
    ]
  },
  {
    dia: 27,
    semana: "TER",
    mares: [
      { hora: "03:44", altura: 2.43 },
      { hora: "10:01", altura: 0.07 },
      { hora: "16:14", altura: 2.40 },
      { hora: "22:25", altura: 0.28 }
    ]
  },
  {
    dia: 28,
    semana: "QUA",
    mares: [
      { hora: "04:27", altura: 2.42 },
      { hora: "10:51", altura: 0.11 },
      { hora: "17:02", altura: 2.31 },
      { hora: "23:08", altura: 0.35 }
    ]
  },
  {
    dia: 29,
    semana: "QUI",
    mares: [
      { hora: "05:17", altura: 2.37 },
      { hora: "11:46", altura: 0.20 },
      { hora: "17:55", altura: 2.18 }
    ]
  },
  {
    dia: 30,
    semana: "SEX",
    mares: [
      { hora: "00:01", altura: 0.47 },
      { hora: "06:08", altura: 2.27 },
      { hora: "12:36", altura: 0.33 },
      { hora: "18:49", altura: 2.03 }
    ]
  },
  {
    dia: 31,
    semana: "SÁB",
    mares: [
      { hora: "00:55", altura: 0.59 },
      { hora: "07:02", altura: 2.15 },
      { hora: "13:40", altura: 0.47 },
      { hora: "19:46", altura: 1.90 }
    ]
  }
];

function TabuaDeMaresPage(){
  return (
    <div className=''>
      <Header/>
      <h1 className='text-[var(--text)] ml-40 pt-[130px] font-roboto text-[4.3575rem] not-italic font-bold leading-none'>Tábua de Marés</h1>
      <div className='flex w-screen pt-[80px] justify-evenly'>
      {dadosMares.map((dia, index) => (
          <CardTabelaMare
            key={index}
            dia={dia.dia}
            semana={dia.semana}
            mares={dia.mares}
          />
        ))}
      </div>
    </div>
  )
}
export default TabuaDeMaresPage