import * as actionType from './actionTypes'
export const openModal = (img) => {
    return {
        type  : actionType.OPEN_MODAL,
        img : img
    }
}
export const closeModal = () => {
    return {
        type  : actionType.CLOSE_MODAL,
    }
}