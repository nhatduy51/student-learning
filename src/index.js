import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/container/';
import LoginScreen from './Screens/LoginScreen';
import RegisterScrenn from './Screens/RegisterScreen';
import ClassRoom from './Screens/ClassRoom';
import JamboardRoom from './Screens/JamboardRoom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/login" component = {LoginScreen}/>
          <Route path="/register" component = {RegisterScrenn}/>
          <Route path="/classroom" component = {ClassRoom}/>
          <Route path="/jamboard" component = {JamboardRoom}/>
x
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
