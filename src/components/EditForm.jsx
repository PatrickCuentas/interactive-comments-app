import { updateComment } from "../actions/updateComment";
import { updateReply } from "../actions/updateReply";
import { useForm } from "../hooks/useForm";
export const EditForm = ({ content, setIsEditing, id, dispatch, comment }) => {
  const [inputValue, handleInput] = useForm(content);

  const handleUpdateComment = (e) => {
    e.preventDefault();
    updateComment(dispatch, inputValue, id);
    setIsEditing(false);
  };

  const handleUpdateReply = (e) => {
    e.preventDefault();
    updateReply(dispatch, inputValue, id);
    setIsEditing(false);
  };

  return (
    <form
      onSubmit={
        comment.hasOwnProperty("replyingTo")
          ? handleUpdateReply
          : handleUpdateComment
      }
      className="animate__animated animate__bounceInLeft "
    >
      <div className="flex flex-col gap-5 bg-white rounded-2xl">
        <textarea
          className="
            form-control
            w-full
            px-3
            py-1.5
            text-lg
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-[#f0f0f0] focus:border-moderate-blue
            rounded
            transition
            ease-in-out
            m-0
            focus:light-gray
            focus:text-gray-700  focus:outline-none
          "
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Add a comment..."
          value={inputValue}
          onChange={handleInput}
        ></textarea>
        <div className="place-self-end">
          <button
            className="px-8 py-4 lg:py-2.5 rounded-xl bg-moderate-blue text-white text-xl lg:text-lg font-bold hover:opacity-40"
            type="submit"
          >
            UPDATE
          </button>
        </div>
      </div>
    </form>
  );
};
