export const RECEIVE_ALBUMS = 'albums/RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'albums/RECEIVE_ALBUM';

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbum = (payload) => ({
    type: RECEIVE_ALBUM,
    payload
})

//selectors

// export const getAlbums = (state) => state.albums ? Object.values(state.albums) : [];
// export const getAlbum = (albumId) => (state) => state.albums ? state.albums[albumId] : null;


export const fetchAlbums = () => async dispatch => {
    const response = await fetch(`/api/albums`);
    const data = await response.json();
    return dispatch(receiveAlbums(data.albums));
}

export const fetchAlbum = (albumId) => async dispatch => {
    const response = await fetch(`/api/albums/${albumId}`);
    const data = await response.json();
    return dispatch(receiveAlbum(data)); 
}



const albumsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_ALBUMS:
            return { ...nextState, ...action.albums };
        case RECEIVE_ALBUM:
            nextState[action.payload.album.id] = action.payload.album;
            return nextState;
        default:
            return state;
    }
}

export default albumsReducer;