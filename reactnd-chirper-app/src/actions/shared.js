import * as API from "../utils/api";
import { setAuthedUser } from "../actions/authUser";

const AUTHED_USER = "tylermcginnis";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = (users, tweets) => ({
  type: RECEIVE_DATA,
  users,
  tweets,
});

export const handleInitialData = () => (dispatch) =>
  API.getInitialData()
    .then(({ users, tweets }) => {
      dispatch(receiveData(users, tweets));
      dispatch(setAuthedUser(AUTHED_USER));
    })
    .catch(() => alert("An error occured while fetching initial data."));
