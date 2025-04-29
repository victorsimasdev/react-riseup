export function CardPrimeirosSocorros({ src, title, description, cardColor, reverse = false}){
  if(reverse == true){
    return (
      <div className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-t-[0.9375rem]">
        <img src={ src }/>
        <div
          className="w-[28.1875rem] h-[15rem] flex-shrink-0 items-center flex-col pt-5"
          style={{backgroundColor: cardColor}}
        >
          <h1 className="text-[color:var(--backgroundHeader)] text-center font-roboto text-3xl not-italic font-black leading-normal">{ title }</h1>
          <p className="pl-5 pt-5 text-[color:var(--text)] font-roboto text-[1.3125rem] not-italic font-bold leading-normal whitespace-pre-line">{ description }</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-t-[0.9375rem]">
        <div
          className="w-[28.1875rem] h-[15rem] flex-shrink-0 rounded-t-[0.9375rem] items-center flex-col pt-5 "
          style={{backgroundColor: cardColor}}
        >
          <h1 className="text-[color:var(--backgroundHeader)] text-center font-roboto text-3xl not-italic font-black leading-normal">{ title }</h1>
          <p className="pl-5 pt-5 text-[color:var(--text)] font-roboto text-[1.3125rem] not-italic font-bold leading-normal whitespace-pre-line">{ description }</p>
        </div>
        <img src={ src }/>
      </div>
    );
  }
}