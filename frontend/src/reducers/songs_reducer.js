import { RECEIVE_SONGS } from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_SONGS:
            return { ...nextState, ...action.songs };
        default:
            return state;
    }
}

export default songsReducer;