import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router , Route, Switch, Redirect } from 'react-router-dom';
import { AppComponent } from './app.component';
import { Whoops404 } from './component/whoops404.component';
import './css/app.component.scss';

window.React = React;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/list" component={AppComponent}/>
                <Route component={Whoops404} />
            </Switch>
        </div>
    </Router>,
	document.getElementById('react-container')
)