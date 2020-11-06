import axios from 'axios';

export const SMURF_FETCH_START = 'SMURF_FETCH_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';

export const fetchData = () => (dispatch) => {
    dispatch({ type: SMURF_FETCH_START });

    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error);
        })
};