import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchedKey, setSearchedKey] = useState("");
  const updateSearchedKey = (providedKey) => {
    setSearchedKey(providedKey);
  };
  return (
    <SearchContext.Provider value={{ searchedKey, updateSearchedKey }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchProvider = () => useContext(SearchContext);
