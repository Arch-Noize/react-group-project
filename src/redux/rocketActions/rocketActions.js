import axios from 'axios';

// Action Types
export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';

// Action Creators
export const fetchRocketsRequest = () => ({
  type: FETCH_ROCKETS_REQUEST,
});

export const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

export const fetchRocketsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: error,
});

// Thunk to fetch rocket data
export const fetchRockets = () => {
  return async (dispatch) => {
    dispatch(fetchRocketsRequest());
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      const rockets = response.data;
      console.log(rockets);
      dispatch(fetchRocketsSuccess(rockets));
    } catch (error) {
      dispatch(fetchRocketsFailure(error.message));
    }
  };
};
