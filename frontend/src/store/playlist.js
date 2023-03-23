export const RECEIVE_PLAYLIST = 'playlists/RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'playlists/RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLIST = 'playlists/REMOVE_PLAYLIST';

export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
})

export const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId
})

export const fetchPlaylists = () => async dispatch => {
    const response = await fetch(`/api/playlists`);
    const data = await response.json();
    return dispatch(receivePlaylists(data))
}

export const fetchPlaylist = (playlistId) => async (dispatch) => {
    const response = await fetch(`/api/playlists/${playlistId}`);
    const data = await response.json();
    return dispatch(receivePlaylist(data));
};

export const deletePlaylist = (playlistId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(removePlaylist(playlistId));
  }
};

const playlistsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return { ...nextState, ...action.playlists };
        case RECEIVE_PLAYLIST:
            return { ...nextState, ...action.playlist };
        case REMOVE_PLAYLIST:
            delete nextState[action.playlistId];
            return nextState;
        default:
            return state;
    }
}

export default playlistsReducer;
