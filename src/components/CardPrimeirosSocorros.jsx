export function CardPrimeirosSocorros({ src, title, description }){
  return (
    <div className="pt-10">
      <div className="w-[28.1875rem] h-[15rem] flex-shrink-0 rounded-t-[0.9375rem] bg-[#CFDBC8] items-center flex-column pt-5">
        <h1 className="text-[color:var(--backgroundHeader)] text-center font-roboto text-3xl not-italic font-black leading-normal">{ title }</h1>
        <p className="pl-5 pt-5 text-[color:var(--text)] font-roboto text-[1.3125rem] not-italic font-bold leading-normal whitespace-pre-line">{ description }</p>
      </div>
      <img src={ src }/>
    </div>
  );
}