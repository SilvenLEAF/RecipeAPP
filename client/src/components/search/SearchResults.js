import M from 'materialize-css'
import '../../styles/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { SearchContext } from '../../contexts/subContexts/SearchContext'



import SearchResultItem from './SearchResultItem'









function SearchResults() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  const { searchResults, setSearchResults } = useContext(SearchContext)
  
  const history = useHistory()
  





  // if(!userData._id) history.push('/login')

  return (
    <div className="container myUserListPage">
      <h6 className="blue-text">Search Results</h6>


      <ul>
        {
          searchResults[0] && searchResults.map((item, index)=>{
            return (
              <Link to={ "/searchResults/" + index } key={ index } >
                <SearchResultItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default SearchResults
