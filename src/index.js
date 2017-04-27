import React from 'react';
import { render } from 'react-dom';
import { AppComponent } from './app.component';
import { Provider } from 'react-redux';
import AppStore  from './store/app.store';
import './css/app.component.scss';

window.React = React;

render(
  <Provider store={AppStore}>
    <AppComponent> </AppComponent>
  </Provider>,
	document.getElementById('react-container')
)