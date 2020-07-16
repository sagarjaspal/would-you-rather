import { RECEIVE_DATA } from "../actions/shared";
import { TOGGLE_LIKE } from "../actions/tweets";

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, action.tweets);
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(
                  (uid) => uid !== action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser]),
        },
      };
    default:
      return state;
  }
};

export default tweets;
