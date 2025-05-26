import { Trash } from "@phosphor-icons/react";
export function ChatMessage({ content, onDelete }) {
  function handleDelete() {
    onDelete(content);
  }

  return (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-500 text-white p-4 rounded-xl max-w-[75%] relative">
        <div className="flex justify-between items-start gap-2">
          <strong className="text-sm">Você</strong>
          <button
            onClick={handleDelete}
            title="Deletar mensagem"
            className="text-white hover:text-red-300 text-xs underline"
          >
            <Trash size={18}/>
          </button>
        </div>
        <p className="mt-2 break-words">{content}</p>
      </div>
    </div>
  );
}
