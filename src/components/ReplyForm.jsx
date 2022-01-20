import {useContext} from "react";
import {UserContext} from "../UserContext.jsx"
import { useForm } from "../hooks/useForm.jsx";
import { addReply } from "../actions/addReply.jsx";


export const ReplyForm = (comment) => {
    const {comments,dispatch,currentUser} = useContext(UserContext);
    const [inputValue,handleInput,handleSubmit] = useForm("");
    const {user:{image:{png}}} = currentUser;


    return (
    <form onSubmit={(e)=>handleSubmit(e,addReply,{
        inputValue,
        currentUser,
        comments,
        dispatch,
        comment
    })} className="animate__animated animate__bounceInLeft ">
       <div className="grid form gap-5 my-5 p-5 bg-white rounded-2xl lg:place-content-between">
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
        >
        </textarea>
            <div className="profile">
                <a href="#">
                      <img
                        className="h-10 min-w-[40px] min-h-[40px]"
                        src={`../.${png}`} alt="" />
                </a>
            </div>
            <div className="send place-self-end lg:place-self-start">
                <button
                    className="px-8 py-4 lg:py-2.5 rounded-xl bg-moderate-blue text-white text-xl lg:text-lg font-bold hover:opacity-40"
                    type="submit"
                >REPLY</button>
            </div>
    </div>
    </form>
    )
}
