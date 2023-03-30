export const RECEIVE_PLAYLIST_SONGS = 'playlistSongs/RECEIVE_PLAYLIST_SONGS';
export const ADD_PLAYLIST_SONG = 'playlistSongs/ADD_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'playlistSongs/REMOVE_PLAYLIST_SONG';

export const receivePlaylistSongs = (playlistSongs) => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs
});

export const addPlaylistSong = (playlistSong) => ({
  type: ADD_PLAYLIST_SONG,
  playlistSong
});

export const removePlaylistSong = (playlistSongId) => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSongId
});

export const fetchPlaylistSongs = (playlistId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}/playlistSongs`);
  const data = await response.json();
  return dispatch(receivePlaylistSongs(data));
};

export const createPlaylistSong = (playlistId, playlistSong) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}/playlist_songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(playlistSong)
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addPlaylistSong(data));
  }
};

export const deletePlaylistSong = (playlistId, playlistSongId) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlistId}/playlistSongs/${playlistSongId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    dispatch(removePlaylistSong(playlistSongId));
  }
};

const playlistSongsReducer = (state = {}, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_PLAYLIST_SONGS:
      return { ...nextState, ...action.playlistSongs };
    case ADD_PLAYLIST_SONG:
      nextState[action.playlistSong.id] = action.playlistSong;
      return nextState;
    case REMOVE_PLAYLIST_SONG:
      delete nextState[action.playlistSongId];
      return nextState;
    default:
      return state;
  }
};

export default playlistSongsReducer;
