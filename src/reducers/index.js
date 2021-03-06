import { combineReducers } from 'redux';

const roomReducer = (state , action) => {
    let room = {
        name: null
    }
    if(action.type === 'ROOM_LOADED') {
        return Object.assign({}, state, {
            name: action.payload
        });
    } else if (action.type === 'ROOM_ERROR') {
        return Object.assign(room, state, {
            name: false
        });
    } else if (action.type === 'RESET_ROOM') {
        return Object.assign(room, state, {
            name: null
        });
    }
    return Object.assign(room, state);
}

const goToRoomReducer = (id = '', action) => {
    if(action.type === 'GO_TO_ROOM') {
        return action.payload;
    }
    return id;
}

const newRoomSpinnerReducer = (show = false, action) => {
    if(action.type === 'SHOW_ROOM_SPINNER') {
        return action.payload;
    }
    return show;
}

const getRoomSpinnerReducer = (show = false, action) => {
    if(action.type === 'SHOW_GET_ROOM_SPINNER') {
        return action.payload;
    }
    return show;
}

const snackBarReducer = (state, action) => {
    if(action.type === 'SHOW_ERROR') {
        return Object.assign({}, state, {
            show: true,
            message: action.payload,
            severity: 'error'
        });
    } else if (action.type === 'SHOW_SUCCESS') {
        return Object.assign({}, state, {
            show: true,
            message: action.payload,
            severity: 'success'
        });
    } else if (action.type === 'HIDE_SNACKBAR') {
        return Object.assign({}, state, {
            show: false,
        });
    }
    let defaultState = {
        show: false,
        message: '',
        severity: 'success'
    }
    return Object.assign(defaultState, state);
}

export default combineReducers({
    room: roomReducer,
    goToRoom: goToRoomReducer,
    newRoomSpinner: newRoomSpinnerReducer,
    getRoomSpinner: getRoomSpinnerReducer,
    snackBar: snackBarReducer
})