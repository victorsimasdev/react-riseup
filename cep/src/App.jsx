import { useState } from "react"

function App() {
    const [cep, setCep] = useState('');
    const [resultado, setResultado] = useState('');
    const [erro, setErro] = useState('');

    function buscarCEP() {
      setResultado('');
      setErro('');
  
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            setErro('CEP não encontrado!');
          } else {
            setResultado(data);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar CEP:', error);
          setErro('Erro na requisição.');
        });
    }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-[#222] text-2xl font-bold mb-4 text-center">Buscar Endereço pelo CEP</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="text-[#222] flex-1 px-4 py-2 border rounded"
          />
          <button
            onClick={buscarCEP}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Buscar
          </button>
        </div>

        <div className="mt-4">
          {resultado && (
            <p className="text-[var(--text-color)] font-medium">
              <strong>Resultado:</strong><br />
              Logradouro: {resultado.logradouro} <br />
              Bairro: {resultado.bairro} <br />
              Cidade: {resultado.localidade} <br />
              Estado: {resultado.estado} <br />
            </p>
          )}
          {erro && (
            <p className="text-red-600 font-medium">{erro}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App
