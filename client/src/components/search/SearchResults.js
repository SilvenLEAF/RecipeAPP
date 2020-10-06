import M from 'materialize-css'
import '../../styles/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/subContexts/AuthContext'
// import { searchResultsContext } from '../../contexts/subContexts/searchResultsContext'



import SearchResultItem from './SearchResultItem'









function SearchResults() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  // const { searchResults, setSearchResults } = useContext(searchResultsContext)
  const [searchResults, setSearchResults] = useState([1,2,3,4,5,6,7,8,9])
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
                <SearchResultItem/>
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default SearchResults
