import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/uitility';
const initState = {
    modal : false,
    img : null,
}
const openModal = (state , action) => {
    return {
    ...state,
        modal : true,
        img : action.img
    }
}
const closeModal = (state , action) => {
    return updateObject(state , {
        modal : false
    })
}

const uiReducer = (state = initState, action) =>  {
switch (action.type) {
    case actionTypes.OPEN_MODAL: return openModal(state , action);
    case actionTypes.CLOSE_MODAL: return closeModal(state , action);
    default:
        return state; 
}
}

export default uiReducer;