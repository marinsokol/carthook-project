import React, { useState, createContext, ReactElement } from 'react'

const searchQueryFromStorage = localStorage.getItem('searchQuery')
const initSearch = searchQueryFromStorage
  ? (JSON.parse(searchQueryFromStorage) as { ingredientQuery: string; coursesQuery: string })
  : { ingredientQuery: '', coursesQuery: '' }
const initContextValue = {
  ...initSearch,
  setSearchQuery: (query: { ingredientQuery: string; coursesQuery: string }) => {},
}

export const StoreContext = createContext(initContextValue)

export const Store = (props: { children: ReactElement }) => {
  const [query, setQuery] = useState(initSearch)

  return (
    <StoreContext.Provider
      value={{
        ...query,
        setSearchQuery: (query: { ingredientQuery: string; coursesQuery: string }) => {
          setQuery(query)
          localStorage.setItem('searchQuery', JSON.stringify(query))
        },
      }}
    >
      {props.children}
    </StoreContext.Provider>
  )
}

export type StoreContext = typeof initContextValue
