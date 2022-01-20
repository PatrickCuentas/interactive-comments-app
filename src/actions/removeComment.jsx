export const removeComment = (comment, dispatch) => {
  const { id } = comment;
  const payload = {
    id,
  };
  const action = {
    type: "REMOVE_COMMENT",
    payload,
  };
  dispatch(action);
};
