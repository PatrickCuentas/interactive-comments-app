import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import { DeleteLogo } from "../svgs/DeleteLogo.jsx";
import { EditLogo } from "../svgs/EditLogo.jsx";
import { MinusLogo } from "../svgs/MinusLogo.jsx";
import { PlusLogo } from "../svgs/PlusLogo.jsx";
import { Button } from "./Button.jsx";
import { sortComments } from "../actions/sortComments.jsx";
import { EditForm } from "./EditForm.jsx";
const INCREMENT_SCORE = "INCREMENT_SCORE";
const DECREMENT_SCORE = "DECREMENT_SCORE";

export const MyComment = ({ comment = {} }) => {
  const { comments, modalState, dispatch } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [, setModalState] = modalState;

  const {
    id: commentId,
    content,
    createdAt,
    score,
    user: {
      image: { png },
      username,
    },
  } = comment;

  const showModal = () => {
    setModalState({
      comment,
      show: true,
    });
  };

  const toogleIsEditing = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    sortComments(dispatch);
  }, [comments]);

  return (
    <div className="bg-white rounded-2xl p-5 my-5">
      <div className="grid contenedor gap-5 justify-items-start ">
        <div className="head flex items-center text-xl space-x-4 > *">
          <a href="#">
            <img className="h-10 min-w-[40px] min-h-[40px]" src={png} alt="" />
          </a>
          <p className="text-dark-blue font-semibold">{username}</p>
          <div className="flex items-center justify-center bg-moderate-blue ">
            <span className="text-white text-base font-bold px-2 pt-[.1rem] pb-[.2rem]">
              you
            </span>
          </div>
          <p className="text-grayish-blue min-w-[120px]">{createdAt}</p>
        </div>
        <div className="main overflow-hidden justify-self-stretch">
          {!isEditing ? (
            <p className="text-xl text-grayish-blue w-[95%]">
              {comment.hasOwnProperty("replyingTo") && (
                <span className="text-moderate-blue font-bold">
                  @{comment.replyingTo}
                </span>
              )}
              {content}
            </p>
          ) : (
            <EditForm
              content={content}
              setIsEditing={setIsEditing}
              id={commentId}
              dispatch={dispatch}
              comment={comment}
            />
          )}
        </div>
        <div className="score flex lg:flex-col lg:place-self-start lg:px-0 lg:py-4 lg:w-12 lg:justify-center items-center gap-4 px-4 py-2 rounded-xl text-xl bg-very-light-gray">
          <button
            onClick={() =>
              dispatch({ type: INCREMENT_SCORE, payload: { commentId } })
            }
          >
            <PlusLogo />
          </button>
          <span className="font-bold text-moderate-blue">{score}</span>
          <button
            onClick={() =>
              dispatch({ type: DECREMENT_SCORE, payload: { commentId } })
            }
          >
            <MinusLogo />
          </button>
        </div>
        <div className="reply flex justify-self-end gap-5">
          <Button
            Logo={<DeleteLogo />}
            text="Delete"
            color="text-soft-red"
            handler={showModal}
          />
          <Button
            Logo={<EditLogo />}
            text="Edit"
            color="text-moderate-blue"
            handler={toogleIsEditing}
          />
        </div>
      </div>
    </div>
  );
};
