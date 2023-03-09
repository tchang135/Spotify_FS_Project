import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk' 
import songsReducer from './song';
import albumsReducer from './album';
import artistsReducer from './artist';
import sessionReducer from './session';
import currentSongReducer from './currentSong';
import currentAlbumReducer from './currentAlbum';
import playlistsReducer from './playlist';


const rootReducer = combineReducers({
  session: sessionReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artist: artistsReducer,
  currentSong: currentSongReducer,
  currentAlbum: currentAlbumReducer,
  playlists: playlistsReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };


 export default configureStore;