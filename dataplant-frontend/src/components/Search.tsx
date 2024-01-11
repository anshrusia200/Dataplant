export const Search = () => {
  return (
    <div>
      <div className="relative">
        <input
          type="search"
          className="block w-[300px] p-2 pr-[25px] text-sm text-gray-900 border border-gray-300 rounded-[5px] bg-gray-50"
          placeholder="Search"
          required
        ></input>
        <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
