import { getArrayUnnested } from "../utilities/getArrayUnnested";

export const addComment = ({ inputValue, currentUser, comments, dispatch }) => {
  // Necesitas el "inputValue" "currentUser" "comments" "dispatch"
  let newId = ++getArrayUnnested(comments).length;
  const payload = {
    id: newId,
    content: inputValue,
    createdAt: "Second Ago",
    score: 0,
    user: currentUser.user,
    replies: [],
  };
  const action = {
    type: "ADD_COMMENT",
    payload,
  };
  dispatch(action);
};
