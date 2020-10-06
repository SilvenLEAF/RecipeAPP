import React from 'react'
import '../../styles/Form.scss'

function CuisineSearch() {
  return (
    <>
      <form>        
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
