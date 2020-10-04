import React, { Component } from 'react';
import NavBar from './components/layout/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/layout/Dashboard'
import FloatingActionButton from './components/layout/FloatingActionButton'
import PostDetails from './components/posts/PostDetails'
import Footer from './components/layout/Footer'
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup'
import CreatePost from './components/posts/CreatePost';
import Profile from './components/layout/profile'
import About from './components/layout/About'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App root">
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/post/:post_id" component={PostDetails} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/create" component={CreatePost} />
              <Route path="/profile" component={Profile} />
            </Switch>
            <FloatingActionButton />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
