import Character from "@/components/Characters";

const Page = async ({ searchParams }) => {
  const apiUrl = searchParams.page
    ? `https://rickandmortyapi.com/api/character/?page=${searchParams.page}`
    : "https://rickandmortyapi.com/api/character";

  const res = await fetch(apiUrl);
  const data = await res.json();

  return (
    <div className="container mx-auto md:w-full md:h-full gap-x-2 md:gap-x-4 p-4 w-[40px] h-[40px] md:p-0 grid grid-cols-2 md:grid-cols-4">
      {data.results.map((character, index) => (
        <Character character={character} key={index} />
      ))}
    </div>
  );
};

export default Page;
