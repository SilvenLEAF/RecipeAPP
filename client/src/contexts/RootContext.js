import React from 'react'
import AuthContextProvider from './subContexts/AuthContext'
import SearchContextProvider from './subContexts/SearchContext'

function RootContext({ children }) {
  return (
    <>
      <AuthContextProvider>
        <SearchContextProvider>
          { children }
        </SearchContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default RootContext
