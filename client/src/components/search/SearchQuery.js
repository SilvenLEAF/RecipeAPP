import M from 'materialize-css'

import { SPOONACULAR_API_KEY } from '../../secrets/Secret'

import React, { useEffect, useState } from 'react'

function SearchQuery() {
  useEffect(()=>{
    M.AutoInit()
  }, [])

  

  const [query, setQuery] = useState('');
  const [searchedRecipies, setSearchedRecipies] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=${query}`);

    const data = await res.json();

    setSearchedRecipies(data)
    console.log(data);
  }
  
  

  return (
    <div className="container">
      <form onSubmit={ handleSubmit } >
        <div className="input-field">
          <input type="text" value={ query } onChange={ e => setQuery(e.target.value) } />
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
