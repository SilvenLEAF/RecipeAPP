import M from 'materialize-css'

import Secret from '../../secrets/Secret'

import React, { useEffect, useState } from 'react'

function SearchQuery() {
  useEffect(()=>{
    M.AutoInit()
  }, [])

  

  const [query, setQuery] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(Secret)
  }
  
  

  return (
    <div className="container">
      <form onSubmit={ handleSubmit } >
        <div className="input-field">
          <input type="text" value={ query } />
          <label htmlFor="query">Search by Query</label>
        </div>

        <div className="input-field">
          <button className="btn waves-effect waves-light blue" type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchQuery
