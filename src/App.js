import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import User from './pages/userBlog/userBlogs';
import Blog from './pages/blogDetails/blogDetails';
import Footer from './component/footer/footer'

import './App.css';
import Header from  './component/header/generalHeader'
import { useState } from 'react';
import NotFound from './pages/404Page';

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
            <Route exact path="*" >
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
