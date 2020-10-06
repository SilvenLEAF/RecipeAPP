import '../../styles/Form.scss'


import React from 'react'
import { useHistory } from 'react-router-dom'







function CuisineSearch() {
  const history = useHistory();

  const handleSubmit = (e)=>{
    e.preventDefault();

    history.push('/searchResults')
  }





  return (
    <>
      <form onSubmit={ handleSubmit } >
        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <input type="text" required/>
          <label htmlFor="query">Cuisine <span className="red-text">(e.g. Japanese, French..etc) </span> </label>
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
