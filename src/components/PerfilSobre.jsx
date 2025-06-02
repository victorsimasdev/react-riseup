import React, { useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  ArrowCircleRight,
} from "@phosphor-icons/react";

const perfis = [
  {
    nome: "Julio Bezerra",
    foto: "https://github.com/Juliobzr.png",
    github: "https://github.com/Juliobzr",
    linkedin: "https://www.linkedin.com/in/julio-bezerra-8736941a2/",
  },
  {
    nome: "Victor Simas",
    foto: "https://github.com/victorsimasdev.png",
    github: "https://github.com/victorsimasdev",
    linkedin: "https://www.linkedin.com/in/victor-simas/",
  },
  {
    nome: "Rafael Farias",
    foto: "https://github.com/rafaelFarias7.png",
    github: "https://github.com/rafaelFarias7",
    linkedin: "https://www.linkedin.com/in/rafaelfariass/",
  },
  {
    nome: "Ramom Aguiar",
    foto: "https://github.com/RamomAguiar2004.png",
    github: "https://github.com/RamomAguiar2004",
    linkedin: "https://linkedin.com/in/",
  },
];

export default function PerfilSobre() {
  const [indice, setIndice] = useState(0);

  const proximoPerfil = () => {
    setIndice((prev) => (prev + 1) % perfis.length);
  };

  const { nome, github, linkedin, foto } = perfis[indice];

  return (
    <div
      className="flex items-center space-x-6 p-4 rounded-xl shadow-md max-w-md"
      style={{
        boxShadow:
          "8px 8px 20px rgba(0, 0, 0, 0.25), -4px -4px 10px rgba(255, 255, 255, 0.6)",
      }}
    >
      <div className="flex flex-col items-center">
        <img src={foto} className="h-40 object-cover rounded-lg" />
      </div>
      <div className="flex items-center justify-between w-[12.5rem]">
        <div className="flex flex-col space-y-1 mb-2 ">
          <p className="mt-2 text-base font-bold text-[1.5rem]">{nome}</p>
          <a
            href={github}
            className="flex items-center hover:text-[var(--alert)]"
            target="_blank"
          >
            <GithubLogo size={32} />
            Github
          </a>
          <a
            href={linkedin}
            className="flex items-center hover:text-[var(--alert)]"
            target="_blank"
          >
            <LinkedinLogo size={32} />
            Linkedin
          </a>
        </div>

        <button
          onClick={proximoPerfil}
          className="hover:text-[var(--alert)] text-sm h-[2rem] cursor-pointer"
        >
          <ArrowCircleRight size={32} />
        </button>
      </div>
    </div>
  );
}
