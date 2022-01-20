import { getArrayUnnested } from "../utilities/getArrayUnnested";

export const addReply = ({
  inputValue,
  currentUser,
  comments,
  dispatch,
  comment,
}) => {
  // Necesitas el "inputValue" "currentUser" "comments" "dispatch"
  let newId = ++getArrayUnnested(comments).length;
  const {
    user: { username },
  } = comment;
  const payload = {
    id: newId,
    content: inputValue,
    createdAt: "Second Ago",
    score: 0,
    replyingTo: username,
    user: currentUser.user,
    replies: [],
  };
  const action = {
    type: "ADD_REPLY",
    payload,
    comment,
  };
  dispatch(action);
};
