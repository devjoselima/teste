import searchIcon from "../assets/search-icon.svg"

export const SearchBar = () => {
  return (
    <div className="flex">
      <div className="bg-white flex items-center px-1">
        <label htmlFor="search">
          <img src={searchIcon} alt="lupa" className="cursor-pointer" />
        </label>
      </div>
      <input
        type="text"
        id="search"
        placeholder="pesquisar"
        className="p-2 outline-none bg-white text-sm"
      />
    </div>
  )
}
