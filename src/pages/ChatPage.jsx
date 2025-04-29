import { Header } from '../components/Header';
import { useState } from 'react';

function ChatPage() {
  const [showModal, setShowModal] = useState(false);

  const handleAuthorityClick = (authority) => {
    alert(`${authority} acionado para sua localização.`);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6">PÁGINA DO CHAT</h1>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Alertar autoridades
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-80 text-center">
              <h2 className="text-lg font-semibold mb-4">Escolha a autoridade:</h2>
              <div className="flex flex-col space-y-3">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                  onClick={() => handleAuthorityClick('Polícia')}
                >
                  Polícia
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
                  onClick={() => handleAuthorityClick('Médico')}
                >
                  Médico
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
                  onClick={() => handleAuthorityClick('Bombeiro')}
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
  );
}

export default ChatPage;
