import React from 'react'

function SearchResultItem() {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(/Logo.png) center/cover` }}></div>
    <div>
      <div className="myUserName">
        Italian Burger Pizza
      </div>

      {/* <p className="grey-text">
        Fullstack Developer
      </p> */}
    </div>

    <div className="fa fa-eye"></div>

  </li>
  )
}

export default SearchResultItem
