import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'





function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h2 id="myLandingTitle" className="pageTitle">
          Whadyawanna eat?
        </h2>
        
        <div className="myLandingDescription">
          Wanna eat something delicious? I'm the magical book with all the secrets of the world's delicacies!
        </div>

        <h6 className="red-text myWithLoveFromSilvenLEAF" >
          --------With LOVE from SilvenLEAF
        </h6>
      </div>
      


      
    </div>
  )
}

export default Home
