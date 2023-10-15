import { BiSearch } from "react-icons/bi";
import Theme from "@/components/Theme";

export default function Header() {
  return (
    <div className="flex items-center gap-5 h-20 p-3">
      <div className="bg-amber-500 dark:bg-rose-600 p-2 rounded-xl">
        App
      </div>
      <div className="flex flex-none md:flex-1 items-center gap-2 border dark:border-gray-600 p-2 rounded-lg">
        <input
          className="outline-none flex-none md:flex-1 bg-transparent max-w-[200px] md:max-w-full"
          placeholder="search area"
          type="text"
        />
        <BiSearch size={25} />
      </div>
      <Theme />
    </div>
  );
}
