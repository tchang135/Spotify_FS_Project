export const SET_CURRENT_SONG = 'currentSong/SET_CURRENT_SONG';


export const setCurrentSong = (songId) => ({
    type: SET_CURRENT_SONG,
    songId
})


const currentSongReducer = (state = {}, action) => {

    switch (action.type) {
        case SET_CURRENT_SONG:
            return action.songId;
        default:
            return state;
    }
}

export default currentSongReducer;