
const INCREMENT_SCORE = "INCREMENT_SCORE";
export const incrementScore = (dispatch,id)=>{
    dispatch({ type: INCREMENT_SCORE ,payload: {id}});
}