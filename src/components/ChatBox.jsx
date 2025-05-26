import { useState } from 'react';
import { ChatMessage } from './ChatMessage';

export function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  function handleSendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput('');
  }

  function handleDeleteMessage(messageToDelete) {
    setMessages(messages.filter((msg) => msg !== messageToDelete));
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSendMessage();
  }

  return (
    <div className="w-[60.25rem] h-[48rem] border-[9px] border-[#001F3F] bg-[#E9F8FF] rounded-[0.9375rem] flex flex-col p-6">
      <div className="flex-1 overflow-y-auto pr-2">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            content={msg}
            onDelete={handleDeleteMessage}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
