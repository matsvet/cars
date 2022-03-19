import {useCollectionData} from "react-firebase-hooks/firestore";

const SET_NOTES = 'notes/SET-NOTES';

let initialState = {
    notes: []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES:
            return {...state, notes: action.notes}
        default:
            return state;
    }
}

export default notesReducer;

export const setNotes = (notes) => ({type: SET_NOTES, notes: notes})

export const getNotesThunkCreator = (userId) => async (dispatch) => {
    let data = useCollectionData(
        firestore.collection('tachki')
    )
    dispatch(setNotes(data))
}