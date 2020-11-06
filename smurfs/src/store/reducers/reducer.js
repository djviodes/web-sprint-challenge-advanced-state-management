import { SMURF_FETCH_START, SMURF_FETCH_SUCCESS } from '../actions/actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SMURF_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case SMURF_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
            }
        default:
            return state;
    }
};