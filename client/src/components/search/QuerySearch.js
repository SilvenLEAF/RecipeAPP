import '../../styles/Form.scss'



import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { SPOONACULAR_API_KEY } from '../../secrets/Secrets'
import { SearchContext } from '../../contexts/subContexts/SearchContext';





function QuerySearch() {


  const { setSearchResults } = useContext(SearchContext)
  const history = useHistory();

  const [query, setQuery] = useState('');




  const handleSubmit = async (e)=>{
    e.preventDefault();

    const recipeRes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ SPOONACULAR_API_KEY }&query=${ query }`);
    const recipeData = await recipeRes.json();

    console.log(recipeData.results);
    
    setSearchResults(recipeData.results);
    history.push('/searchResults');
  }



  return (
    <>
      <form onSubmit={ handleSubmit } >
        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <input type="text" value={ query } onChange={ e=> setQuery(e.target.value) } required/>
          <label htmlFor="query">Description <span className="red-text">(e.g. pizza) </span> </label>
        </div>

        <div className="input-field right-align">
          <button className="btn myBtn waves-effect waves-light">
            <i className="fa fa-search"></i> Search
          </button>
        </div>

      </form>      
    </>
  )
}

export default QuerySearch
