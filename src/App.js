import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import User from './pages/userBlog/userBlogs';
import Blog from './pages/blogDetails/blogDetails';

import './App.css';
import Header from  './component/header/generalHeader'
import { useState } from 'react';

function App() {

  let [headerText, setHeaderText] = useState('')
  let changeHeader = (e) => {
    setHeaderText(e)
  }

  return (
    <Router>
      <div className="App">
        <Header header={headerText} />
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home changeHeader={changeHeader} />
            </Route>
            <Route exact path="/:user" >
              <User changeHeader={changeHeader} />
            </Route>
            <Route exact path="/:user/:slug" >
              <Blog changeHeader={changeHeader} />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
