export function CardTabelaMare({ dia, semana, mares }) {
  const primeiraSessao = mares.slice(0, 2);
  const segundaSessao = mares.slice(2, 4);

  return (
    <div className="min-w-[15.875rem] max-w-[15.875rem] bg-white rounded-[15px] border-4 border-[var(--background-header)] shadow-lg transition-transform hover:scale-105">
      {/* Cabeçalho */}
      <div className="border-b-4 border-[var(--background-header)] h-[8.13rem] flex flex-col items-center justify-center bg-[var(--background-header)] text-white rounded-t-[10px]">
        <h1 className="text-2xl font-bold">{semana}</h1>
        <h2 className="text-xl">{dia}</h2>
      </div>

      {/* Primeira sessão */}
      <div className="border-b-4 border-[var(--background-header)] h-[11.12rem] flex flex-col items-center justify-center px-2">
        <h1 className="mb-2 font-semibold text-[var(--background-header)]">Maré</h1>
        {primeiraSessao.map((m, i) => (
          <div key={i} className="flex justify-between w-full px-4">
            <span>{m.hora}</span>
            <span>{m.altura.toFixed(2)} m</span>
          </div>
        ))}
      </div>

      {/* Segunda sessão */}
      <div className="h-[11.81rem] flex flex-col items-center justify-center px-2">
        <h1 className="mb-2 font-semibold text-[var(--background-header)]">Maré</h1>
        {segundaSessao.length > 0 ? (
          segundaSessao.map((m, i) => (
            <div key={i} className="flex justify-between w-full px-4">
              <span>{m.hora}</span>
              <span>{m.altura.toFixed(2)} m</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Sem mais dados</p>
        )}
      </div>
    </div>
  );
}
