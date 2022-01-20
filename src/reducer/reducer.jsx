export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SORT_COMMENTS":
      return state.sort((a, b) => b.score - a.score);
    case "UPDATE_COMMENT":
      return state.map((comment) =>
        comment.id === payload.id
          ? { ...comment, content: payload.text }
          : comment
      );
    case "UPDATE_REPLY":
      return state.map((comment) => {
        comment.replies.forEach((reply) => {
          if (reply.id === payload.id) {
            reply.content = payload.text;
          }
        });
        return comment;
      });
    case "INCREMENT_SCORE":
      return state.map((comment) =>
        comment.id === payload.commentId
          ? { ...comment, score: ++comment.score }
          : comment
      );
    case "DECREMENT_SCORE":
      return state.map((comment) =>
        comment.id === payload.commentId
          ? { ...comment, score: --comment.score }
          : comment
      );
    case "ADD_REPLY":
      return state.map((comment) =>
        comment.id === action.comment.id
          ? { ...comment, replies: [...comment.replies, payload] }
          : comment
      );
    case "REMOVE_REPLY":
      return state.map((comment) => {
        comment.replies.forEach(
          (reply) =>
            reply.id === action.comment.id &&
            comment.replies.splice(comment.replies.indexOf(reply), 1)
        );
        return comment;
      });
    case "ADD_COMMENT":
      return [...state, payload];
    case "REMOVE_COMMENT":
      return state.filter((comment) => comment.id !== payload.id);
    default:
      return state;
  }
};
