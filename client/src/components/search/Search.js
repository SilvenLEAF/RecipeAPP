import M from 'materialize-css'

import React, { useEffect } from 'react'



import QuerySearch from './QuerySearch';
import CuisineSearch from './CuisineSearch';




function Search() {
  useEffect(()=>{
    M.AutoInit();
  },[])


  return (
    <div className="container" >
      <div className="myDefaultForm">
        <h2 className="myDefaultFormName">Search</h2>

        <ul className="tabs">
          <li className="tab col s6">
            <a href="#querySearch">By Description</a>
          </li>
          <li className="tab col s6">
            <a href="#cuisineSearch">By Cuisine</a>
          </li>
        </ul>





        <div className="col s12" id="querySearch">
          <QuerySearch/>
        </div>



        <div className="col s12" id="cuisineSearch">
          <CuisineSearch/>
        </div>
      </div>

    </div>
  )
}

export default Search

