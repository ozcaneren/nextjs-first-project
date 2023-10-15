"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("status");

  const tabs = [
    {
      name: "Alive",
      url: "alive",
    },
    {
      name: "Dead",
      url: "dead",
    }
  ];

  const menu = [
    {
      name: "Home",
      link: "/",
    },
  ];

  return (
    <div className="p-3 my-3 w-full bg-emerald-300 dark:bg-indigo-600">
      <div className="container mx-auto md:w-[1400px] flex justify-between items-center">
        {menu.map((item, index) => (
          <Link href={item.link} key={index} className="text-xl font-semibold">
            {item.name}
          </Link>
        ))}
        <div>
          {tabs.map((tab, index) => (
            <Link
              className={`mx-2 px-2 py-1 text-white bg-emerald-500 dark:bg-indigo-700 rounded-md ${
                tab.url === filter ? "bg-emerald-700 dark:bg-indigo-800" : ""
              }`}
              href={`/?status=${tab.url}`}
              key={index}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
