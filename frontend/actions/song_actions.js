export const RECEIVE_SONGS = 'songs/RECEIVE_SONGS';

const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
})

export const getSongs = (state) => state.songs ? Object.values(state.songs) : [];

export const fetchSongs = () => async dispatch => {
    const response = await fetch(`/api/songs`);
    const data = await response.json();
    return dispatch(receiveSongs(data));
}

