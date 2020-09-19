import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




import Home from './components/home/Home'
import SearchQuery from './components/search/SearchQuery';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="myWrapper">
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={SearchQuery} />
          </Switch>
          
        </div>

        <div id="myFooter">
        </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
