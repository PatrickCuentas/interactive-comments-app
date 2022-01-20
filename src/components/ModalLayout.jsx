import { removeComment } from "../actions/removeComment.jsx";
import { removeReply } from "../actions/removeReply.jsx";

export const ModalLayout = ({ modalState, dispatch }) => {
  const [showModal, setShowModal] = modalState;
  const { comment } = showModal;
  window.scrollTo(0, 0);

  const toogleModal = () => {
    setShowModal({
      comment: {},
      show: false,
    });
  };

  const handleDelete = () => {
    if (comment.hasOwnProperty("replyingTo")) {
      removeReply(comment, dispatch);
    } else {
      removeComment(comment, dispatch);
    }
    toogleModal();
  };

  return (
    <div className=" absolute z-10 bg-[rgba(0,0,0,0.5)] w-full h-full inset-0">
      <div className="animate__animated animate__zoomInDown h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 p-8 bg-[white] rounded-lg w-[400px]">
          <h1 className="font-[600] text-[#343d4e] text-3xl ">
            Delete comment
          </h1>
          <p className="text-lg text-[#878889]">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-[#68717e] p-[.7rem_1rem] text-[#eef5ff] text-md font-bold w-[150px] rounded-lg"
              onClick={toogleModal}
            >
              NO, CANCEL
            </button>
            <button
              className="bg-[#ee6368] p-[.7rem_1rem] text-[#eef5ff] text-md font-bold w-[150px] rounded-lg"
              onClick={handleDelete}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
