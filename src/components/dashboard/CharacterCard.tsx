import { Character } from "@/types/character";


export default function CharacterCard({ character }: { character: Character }) {
  const statusColor = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500'
  }[character.status] || 'bg-gray-500';

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{character.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className={`w-3 h-3 rounded-full ${statusColor}`} />
          <span className="text-sm text-gray-600">{character.status}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">{character.species}</p>
      </div>
    </div>
  );
}