import { Header } from "../components/Header";
import { ChatBox } from "../components/ChatBox";
import { useState } from "react";
import { Warning } from "@phosphor-icons/react";

function ChatPage() {
  const [showModal, setShowModal] = useState(false);

  const handleAuthorityClick = (authority) => {
    alert(`${authority} acionado para sua localização.`);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex justify-evenly pt-[100px]">
        <div className="">
          <h1 className="text-black font-roboto text-[2.02125rem] font-bold not-italic leading-none">
            Chat ao vivo
          </h1>
          <ChatBox />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-6">Botão de alerta</h1>
          <p className="w-[24.625rem] h-[4.6875rem] text-black font-roboto text-[1.25rem] font-normal not-italic leading-normal mb-10">
            Acionamento rápido de equipes de resgate e notificação imediata para
            autoridades responsáveis.
          </p>
          <button
            className="cursor-pointer w-[22.0625rem] h-[8.1875rem] rounded-[0.9375rem] bg-[#D32F2F] hover:bg-[#B72323] flex items-center justify-evenly border-[4px] border-[#D32F2F] hover:border-[#D32F2F] transition-colors duration-300 mb-10"
            onClick={() => setShowModal(true)}
          >
            <Warning size={62} color="#fff" />
            <p className="text-white font-roboto text-[2.02125rem] font-bold not-italic leading-none">
              Alertar
              <br />
              autoridades
            </p>
          </button>
          <p className="w-[22rem] text-black font-roboto text-[1.3125rem] font-bold not-italic leading-normal">
            Uso exclusivo para emergências reais. Informações falsas serão
            rastreadas.
          </p>

          {showModal && (
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-lg font-semibold mb-4">
                  Escolha a autoridade:
                </h2>
                <div className="flex flex-col space-y-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                    onClick={() => handleAuthorityClick("Polícia")}
                  >
                    Polícia
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
                    onClick={() => handleAuthorityClick("Médico")}
                  >
                    Médico
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
                    onClick={() => handleAuthorityClick("Bombeiro")}
                  >
                    Bombeiro
                  </button>
                  <button
                    className="mt-4 text-sm text-gray-500 hover:underline"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
