'use client'

import { useRouter } from "next/navigation";

const Character = ({ character }) => {
  const router = useRouter();


  return (
    <div onClick={() => router.push(`/character/${character.id}`)} className="flex justify-center items-center">
      <div className="w-[400px] h-[450px]">
        <div className="flex flex-col py-2 bg-transparent rounded-lg border border-gray-200 dark:border-gray-700 justify-center items-center">
          <img
            src={character.image}
            alt={character.name}
            className="rounded-lg w-64 h-64 mb-4"
          />
          <p className="text-center text-xl font-bold">{character.name}</p>
          <p className="text-center text-xl">{character.species}</p>
          <p className="text-center text-lg">{character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
