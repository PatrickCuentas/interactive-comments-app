const UPDATE_COMMENT = "UPDATE_COMMENT";
export const updateComment = (dispatch, text, id) => {
  dispatch({ type: UPDATE_COMMENT, payload: { text, id } });
};
