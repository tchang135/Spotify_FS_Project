export const CREATE_CURRENT_ALBUM = 'currentAlbum/CREATE_CURRENT_ALBUM';

export const createCurrentAlbum = (album) => ({
    type: CREATE_CURRENT_ALBUM,
    album
})


export const setCurrentAlbum = (albumId) => (dispatch, getState) => {
    const { albums } = getState();
    const album = albums[albumId];
    dispatch(createCurrentAlbum(album));
};


const currentAlbumReducer = (state = {}, action) => {
    
    switch (action.type) {
        case CREATE_CURRENT_ALBUM:     
            return action.album;
        default:
            return state;
    }
}

export default currentAlbumReducer;

