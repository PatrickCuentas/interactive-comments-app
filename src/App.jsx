import { useState, useReducer, useEffect } from "react";
import { Comment } from "./components/Comment";
import { MyComment } from "./components/MyComment.jsx";
import { Form } from "./components/Form.jsx";
import { userData } from "./data/userData";
import { reducer } from "./reducer/reducer.jsx";
import { UserContext } from "./UserContext.jsx";
import { ModalLayout } from "./components/ModalLayout";

import "./App.css";

const sortCommentsByScore = (comments) => {
  return comments.sort((a, b) => b.score - a.score);
};

export const App = () => {
  const modalState = useState({
    comment: {},
    show: false,
  });
  const [comments, dispatch] = useReducer(
    reducer,
    sortCommentsByScore(userData.comments)
  );
  const { currentUser } = userData;

  return (
    <UserContext.Provider
      value={{
        comments,
        dispatch,
        currentUser,
        modalState,
      }}
    >
      <div className="max-w-screen-lg ml-auto mr-auto p-5">
        {comments?.length > 0 &&
          comments.map((comment) => {
            return comment?.user?.username !== "juliusomo" ? (
              <Comment key={comment.id} comment={comment} />
            ) : (
              <MyComment key={comment.id} comment={comment} />
            );
          })}
        <Form />
      </div>
      {modalState[0].show && (
        <ModalLayout modalState={modalState} dispatch={dispatch} />
      )}
    </UserContext.Provider>
  );
};
