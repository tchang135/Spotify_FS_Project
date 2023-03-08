import { RECEIVE_ALBUM } from "./album";

export const RECEIVE_ARTIST = 'artists/RECEIVE_ARTIST'
export const RECEIVE_ARTISTS = 'artists/RECEIVE_ARTISTS'

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
})

export const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
})

export const getArtist = (artistId) => (state) => state.artist ? state.artist[artistId] : null;

export const fetchAlbum = (artistId) => async dispatch => {
    const response = await fetch(`/api/artists/${artistId}`);
    const data = await response.json();
    return dispatch(receiveArtist(data)); 
}

export const fetchArtists = () => async (dispatch) => {
    const response = await fetch(`/api/artists`);
    const data = await response.json();
    return dispatch(receiveArtists(data.artists));
  };

const artistsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_ARTISTS:
            return { ...nextState, ...action.artists };
        case RECEIVE_ARTIST:
            return { ...nextState, ...action.artist };
        case RECEIVE_ALBUM:
            // nextState[action.payload.artists.id] = action.payload.artists;
            return { ...nextState, ...action.payload.artists };
        default:
            return state;
    }
}

export default artistsReducer