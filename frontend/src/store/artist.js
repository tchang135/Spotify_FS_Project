import { RECEIVE_ALBUM } from "./album";

export const RECEIVE_ARTIST = 'artists/RECEIVE_ARTIST'

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
})

export const getArtist = (artistId) => (state) => state.artist ? state.artist[artistId] : null;

export const fetchAlbum = (artistId) => async dispatch => {
    const response = await fetch(`/api/artists/${artistId}`);
    const data = await response.json();
    return dispatch(receiveArtist(data)); 
}

const artistReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_ARTIST:
            return { ...nextState, ...action.artist };
        case RECEIVE_ALBUM:
            // nextState[action.payload.artists.id] = action.payload.artists;
            return { ...nextState, ...action.payload.artists };
        default:
            return state;
    }
}

export default artistReducer