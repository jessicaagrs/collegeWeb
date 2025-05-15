import { SearchIcon } from "../Icons/SearchIcon";

export const Search = () => {
  return (
    <div className="relative flex items-center">
      <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="border-none outline-none w-xs py-3 pr-8 pl-10 bg-(--color-600) rounded-4xl focus:border-solid focus:border-2 focus:border-(--color-1000) transition-transform duration-500"
      />
    </div>
  );
};
