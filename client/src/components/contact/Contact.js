import M from 'materialize-css'
import './../../styles/Form.scss'



import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';










function Contact() {
  useEffect(() => {
    M.AutoInit();
  })






  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = (e)=>{
    e.preventDefault();
  
  
  



    setTitle('');
    setContent('')
    swal("Sent", "Your message is sent. Thanks for contacting!","success");    
  }









  return (
    <div className= "container">



      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h3 className="myDefaultFormName" >Contact Me</h3>






        <div className="input-field">            
        <i className="prefix fa fa-address-card-o"></i>
          <input type="text" name="contactTitle" value={ title } onChange={ e=> setTitle(e.target.value) } required />
          <label htmlFor="title">Title <span className="red-text">(*required)</span></label>
        </div>







        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <textarea name="content" className= "materialize-textarea" value={ content } onChange={ e=> setContent(e.target.value) } required ></textarea>            
          <label htmlFor="content">Content <span className="red-text">(*required)</span></label>
        </div>






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light" id= "myDownloadBtn">
            <i className="fa fa-send"></i> Send
          </button>
        </div>




        
      </form>
    </div>
  )

}

export default Contact
