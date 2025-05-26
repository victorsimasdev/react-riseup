export function CardTabelaMare({ dia, semana, mares }) {
  const primeiraSessao = mares.slice(0, 2);
  const segundaSessao = mares.slice(2, 4);

  return (
    <div className="border-4 h-[31.0625rem] w-[15.875rem] rounded-[15px] border-[var(--background-header)]">
      <div className="border-b-4 border-[var(--background-header)] h-[8.13rem] flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg">{semana}</h1>
        <h2 className="text-xl">{dia}</h2>
      </div>
      <div className="border-b-4 border-[var(--background-header)] h-[11.12rem] flex flex-col items-center justify-center">
        <h1 className="mb-2 font-semibold">Maré</h1>
        <div className="w-[15.875rem]">
          {primeiraSessao.map((m, i) => (
            <div key={i} className="flex justify-evenly">
              <p>{m.hora}</p>
              <p>{m.altura.toFixed(2)} m</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[11.81rem] flex flex-col items-center justify-center">
        <h1 className="mb-2 font-semibold">Maré</h1>
        <div className="w-[15.875rem]">
          {segundaSessao.map((m, i) => (
            <div key={i} className="flex justify-evenly">
              <p>{m.hora}</p>
              <p>{m.altura.toFixed(2)} m</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
