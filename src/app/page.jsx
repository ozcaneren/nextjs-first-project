import Character from "@/components/Characters";

const Page = async ({ searchParams }) => {
  const apiUrl = searchParams.status
    ? `https://rickandmortyapi.com/api/character/?status=${searchParams.status}`
    : "https://rickandmortyapi.com/api/character";

  const res = await fetch(apiUrl);

  const data = await res.json();

  return (
    <div className=" container mx-auto w-full h-full grid grid-cols-3">
      {data.results.map((character, index) => (
        <Character character={character} key={index} />
      ))}
    </div>
  );
};

export default Page;
