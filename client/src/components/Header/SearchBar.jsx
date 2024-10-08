const SearchBar = () => {
  return (
    <div className="flex flex-col max-w-screen-lg">
      <label className="flex items-center gap-1">
        <input
          type="text"
          className="grow border-b-2 bg-transparent border-content placeholder:text-content placeholder:text-lg text-lg text-content outline-none"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#3B82F6"
          className="w-8 h-8 opacity-100"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
