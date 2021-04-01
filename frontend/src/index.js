import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Homepage, About, HighestRated, Boasts, Roasts} from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/highestRated" component={HighestRated}/>
      <Route exact path="/boasts" component={Boasts}/>
      <Route exact path="/roasts" component={Roasts}/>

    </Switch>
  </Router>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
