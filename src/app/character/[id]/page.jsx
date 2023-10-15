import Image from "next/image";

const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const res = await getCharacter(id);

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto p-4 justify-center flex flex-col md:flex-row bg-transparent max-w-6xl rounded-lg">
        <div className="flex justify-center">
          <Image
            src={res.image}
            width={360}
            height={360}
            alt={res.name}
            className="rounded-xl w-[240px] h-[240px] md:w-[360px] md:h-[360px]"
          />
        </div>
        <div className="flex flex-col md:ml-12">
          <p className="text-center text-4xl mt-4 md:mt-0 md:text-6xl mb-8">
            {res.name}
          </p>
          <ul className="flex justify-center items-center md:items-start flex-col list-disc text-2xl text-gray-700 dark:text-gray-300">
            <li>{res.status}</li>
            <li>{res.species}</li>
            <li>{res.gender}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
