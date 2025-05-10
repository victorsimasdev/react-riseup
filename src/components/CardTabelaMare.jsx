export function CardTabelaMare() {
  return (
    <div className="border-4 h-[31.0625rem] w-[15.875rem] rounded-[15px] border-[var(--background-header)]">
      <div className="border-b-4 border-[var(--background-header)] h-[8.13rem] flex flex-col items-center justify-center">
        <h1>Dia da semana</h1>
        <h2>Dia do mes</h2>
      </div>
      <div className="border-b-4 border-[var(--background-header)] h-[11.12rem] flex flex-col items-center justify-center">
        <h1>Mare alta</h1>
        <div className="w-[15.875rem]">
          <div className="flex justify-evenly">
            <p>Hora</p> {/*Buscar dados na API*/}
            <p>Profund</p> {/*Buscar dados na API*/}
          </div>
          <div className="flex justify-evenly">
            <p>Hora</p> {/*Buscar dados na API*/}
            <p>Profund</p> {/*Buscar dados na API*/}
          </div>
        </div>
      </div>
      <div className="h-[11.81rem] flex flex-col items-center justify-center">
        <h1>Mare alta</h1>
        <div className="w-[15.875rem]">
          <div className="flex justify-evenly">
            <p>Hora</p> {/*Buscar dados na API*/}
            <p>Profund</p> {/*Buscar dados na API*/}
          </div>
          <div className="flex justify-evenly">
            <p>Hora</p> {/*Buscar dados na API*/}
            <p>Profund</p> {/*Buscar dados na API*/}
          </div>
        </div>
      </div>
    </div>
  );
}
