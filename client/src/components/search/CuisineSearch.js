import '../../styles/Form.scss'


import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'



import { SPOONACULAR_API_KEY } from '../../secrets/Secrets'
import { SearchContext } from '../../contexts/subContexts/SearchContext';




function CuisineSearch() {
  const { setSearchResults } = useContext(SearchContext)
  const history = useHistory();

  const [cuisine, setCuisine] = useState('');




  const handleSubmit = async (e)=>{
    e.preventDefault();

    const recipeRes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ SPOONACULAR_API_KEY }&cuisine=${ cuisine }`);
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
          <input type="text" value={ cuisine } onChange={ e=> setCuisine(e.target.value) } required />
          <label htmlFor="query">Cuisine <span className="red-text">(e.g. Japanese etc) </span> </label>
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

export default CuisineSearch
