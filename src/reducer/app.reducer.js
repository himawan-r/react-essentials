import { combineReducers } from 'redux';
import { mediaItemsReducer } from './media-items.reducer';
export const appReducer = combineReducers({
    mediaItems: mediaItemsReducer
})