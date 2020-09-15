const express = require('express');
const path = require('path');


// firing Express APP
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));






/* -----------------------------------
.               config
----------------------------------- */





/* -----------------------------------
.               routes
----------------------------------- */







// --------------------ERRORS HANDLING
app.use((err, req, res, next)=>{
  res.status(500).json({ msg: `Server Error!`, error: err.message })
})












// ---------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})