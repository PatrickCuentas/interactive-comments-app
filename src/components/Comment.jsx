import { useState } from "react";
import { CommentCard } from "../ui/CommentCard.jsx";
import { MyComment } from "./MyComment.jsx";
import { ReplyCard } from "./ReplyCard.jsx";
import { ReplyForm } from "./ReplyForm.jsx";

export const Comment = ({ comment = {}}) => {
  const [showForm, setShowForm] = useState(false);
  const { replies } = comment;

  return (
    <>
      <CommentCard comment={comment} setShowForm={setShowForm} />
      {showForm && <ReplyForm {...comment} />}
      {replies?.length > 0 &&
        replies.map((reply) => {
          return reply?.user?.username !== "juliusomo" ? (
            <ReplyCard key={reply.id}>
              <Comment comment={reply}/>
            </ReplyCard>
          ) : (
            <ReplyCard key={reply.id}>
              <MyComment comment={reply} />
            </ReplyCard>
          );
        })}
    </>
  );
};
