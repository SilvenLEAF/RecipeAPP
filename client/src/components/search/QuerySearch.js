import React from 'react'
import '../../styles/Form.scss'

function QuerySearch() {
  return (
    <>
      <form>        
        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <input type="text" required/>
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
