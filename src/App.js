import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from "./Components/Users/users";
import About from "./Components/About/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import UserDetails from "./Components/UserDetails/UserDetails";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className='container'>
        <Router>
          <NavBar/>
          <Switch>
              <Provider store={store}>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/about'} exact component={About}/>
                  <Route path={'/login'} exact component={Login}/>
                  <Route path={'/weather-report'} exact component={Users}/>
                  <Route path={'/contact'} exact component={Contact}/>
              </Provider>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
