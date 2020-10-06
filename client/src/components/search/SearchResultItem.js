import React from 'react'

function SearchResultItem({ item }) {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(${ item.image }) center/cover` }}></div>
    <div>
      <div className="myUserName">
        { item.title }
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
