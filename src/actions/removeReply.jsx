export const removeReply = (comment, dispatch) => {
  const action = {
    type: "REMOVE_REPLY",
    comment,
  };
  dispatch(action);
};
