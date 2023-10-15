"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Bars = () => {
  const searchParams = useSearchParams();
  const pageParams = searchParams.get("page");

  const pages = [
    {
      name: 1,
      url: "1",
    },
    {
      name: 2,
      url: "2",
    },
    {
      name: 3,
      url: "3",
    },
    {
      name: 4,
      url: "4",
    },
    {
      name: 5,
      url: "5",
    },
    {
      name: 6,
      url: "6",
    },
    {
      name: 7,
      url: "7",
    },
    {
      name: 8,
      url: "8",
    },
    {
      name: 9,
      url: "9",
    },
    {
      name: 10,
      url: "10",
    }
  ];

  return (
    <div className="p-3 my-3 w-full bg-emerald-300 dark:bg-indigo-600">
      <div className="container mx-auto md:w-[1400px] flex justify-center space-x-2 items-center">
        {pages.map((page, index) => (
          <Link
            href={`/?page=${page.url}`}
            key={index}
            className={` px-2 py-1 text-white bg-emerald-500 dark:bg-indigo-700 rounded-md ${
              page.url === pageParams ? "bg-emerald-700 dark:bg-indigo-800" : ""
            }`}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bars;
