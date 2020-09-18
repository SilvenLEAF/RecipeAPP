import M from 'materialize-css'

import React, { useEffect } from 'react'

function Home() {
  useEffect(()=>{
    M.AutoInit();
  })


  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default Home
