import React, { createContext, useState } from 'react'


export const SearchContext = createContext();




function SearchContextProvider({ children }) {

  const [searchResults, setSearchResults] = useState([5,6,7])


  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }} >
      { children }
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
