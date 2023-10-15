'use client'

import { useRouter } from "next/navigation";

const Character = ({ character }) => {
  const router = useRouter();


  return (
    <div onClick={() => router.push(`/character/${character.id}`)} className="flex justify-center items-center">
      <div className="md:w-[400px] md:h-[450px] h-[330px]">
        <div className="flex flex-col md:py-2 bg-transparent md:p-0 p-2 rounded-lg border border-gray-200 dark:border-gray-700 justify-center items-center">
          <img
            src={character.image}
            alt={character.name}
            className="rounded-lg md:w-64 md:h-64 w-52 h-52 mb-4"
          />
          <p className="text-center text-xl font-bold w-[160px] md:w-full truncate md:text-clip">{character.name}</p>
          <p className="text-center text-xl">{character.species}</p>
          <p className="text-center text-lg">{character.gender}</p>
          <p className="text-center text-lg">{character.origin.name}</p>
          <p className="text-center text-lg">{character.location.name}</p>

        </div>
      </div>
    </div>
  );
};

export default Character;
