import { MinusLogo } from "../svgs/MinusLogo.jsx";
import { PlusLogo } from "../svgs/PlusLogo.jsx";
import { ReplyLogo } from "../svgs/ReplyLogo.jsx";
import { Button } from "../components/Button.jsx";
import { UserContext } from "../UserContext.jsx";
import { useContext, useEffect } from "react";
import { sortComments } from "../actions/sortComments.jsx";
const INCREMENT_SCORE = "INCREMENT_SCORE";
const DECREMENT_SCORE = "DECREMENT_SCORE";

export const CommentCard = ({ comment = {}, setShowForm = {} }) => {
  const { comments, dispatch } = useContext(UserContext);
  const { id: commentId, content, createdAt, score, user } = comment;

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  useEffect(() => {
    sortComments(dispatch);
  }, [comments]);

  return (
    <div className="bg-white rounded-2xl p-5 my-5">
      <div className="grid contenedor gap-5 justify-items-start">
        {/* PROFILE */}
        <div className="header flex items-center text-lg lg:text-xl space-x-4 > *">
          <a href="#">
            <img
              className="h-10 min-w-[40px] min-h-[40px]"
              src={user?.image?.png}
              alt={`${user?.username} photo`}
            />
          </a>
          <p className="text-dark-blue font-semibold">{user?.username}</p>
          <p className="text-grayish-blue">{createdAt}</p>
        </div>
        {/* FIN PROFILE */}
        {/* TEXTO */}
        <div className="main">
          <p className="text-xl text-grayish-blue break-all">
            {comment.hasOwnProperty("replyingTo") && (
              <span className="text-moderate-blue font-bold">
                @{comment.replyingTo}{" "}
              </span>
            )}
            {content}
          </p>
        </div>
        {/* FIN TEXTO */}
        {/* SCORE */}
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
        {/* FIN SCORE */}
        {/* REPLY */}
        <div className="reply flex justify-self-end ">
          <Button
            Logo={<ReplyLogo />}
            text="Reply"
            color="text-moderate-blue"
            handler={handleShowForm}
          />
        </div>
        {/* FIN REPLY */}
      </div>
    </div>
  );
};
