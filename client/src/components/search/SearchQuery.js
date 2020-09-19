import M from 'materialize-css'
import React, { useEffect, useState } from 'react'

function SearchQuery() {
  useEffect(()=>{
    M.AutoInit()
  }, [])

  const [query, setQuery] = useState('');


  return (
    <div className="container">
      <form>
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