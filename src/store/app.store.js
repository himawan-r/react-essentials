import { createStore } from 'redux';
import { appReducer } from '../reducer/app.reducer';

export default createStore(appReducer);