import React from 'react';
import { render } from 'react-dom';
import { AppComponent } from './app.component';
import './css/app.component.scss';

window.React = React;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

render(
    <AppComponent> </AppComponent>,
	document.getElementById('react-container')
)