import { saveLikeToggle } from "../utils/api";

export const TOGGLE_LIKE = "TOGGLE_LIKE";

const toggleLike = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_LIKE,
  id,
  authedUser,
  hasLiked,
});

export const handleLike = (info) => (dispatch) => {
  dispatch(toggleLike(info));
  return saveLikeToggle(info).catch((error) => {
    console.warn(error);
    alert("An error occured. Please try again.");
  });
};
