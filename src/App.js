import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Browse from './Components/Browse';
import ArtistsPage from './Components/ArtistsPage';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="wraper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Browse} />
            <Route path="/artist/:artistid" component={ArtistsPage} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  )
}


export default App;
