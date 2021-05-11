
import {authUser} from "./auth-reducer";

const INITIALIZATION = 'INITIALIZATION';

let initialState = {
    initialized: false

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializationConfirm = () => ({type: INITIALIZATION,});


export const initializeApp = () => {
    return(dispatch) => {
     dispatch(authUser())
        .then(() => {
    dispatch(initializationConfirm()) ;
})

    }
};


export default appReducer;