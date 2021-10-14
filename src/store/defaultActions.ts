import ACTIONS from "../constants/reduxActions";

export const requestData = () => ({
  type: ACTIONS.REQUEST_DATA,
});

export const receiveData = () => ({
  type: ACTIONS.RECEIVE_DATA
});

export const rejectData = () => ({
  type: ACTIONS.REJECT_DATA
});

export default {
  requestData,
  receiveData, 
  rejectData
};