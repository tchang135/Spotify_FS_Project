const rootReducer = combineReducers({
    teas: teaReducer,
    transactions: transactionReducer,
    user: userReducer
});


let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    let initialState = {};

    if (currentUser) {
        initialState = {
            users: {
            [currentUser.id]: currentUser
            }
        };
    };


    import { createUser, loginUser, logoutUser } from './store/userReducer'; 

    window.createUser = createUser
    window.loginUser = loginUser
    window.logoutUser = logoutUser