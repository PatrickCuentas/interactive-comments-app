const UPDATE_REPLY = "UPDATE_REPLY";

export const updateReply = (dispatch,text,id)=>{
    dispatch({type:UPDATE_REPLY,payload:{text,id}})
}