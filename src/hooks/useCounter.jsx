import { useState } from "react"

export const useCounter = (initialState = 0)=>{
    const [counter, setCounter] = useState(initialState);

    const upVote = (number = 1)=>{
        if(counter > initialState) return;
        setCounter((prev)=>prev+number);
    }

    const downVote = (number = 1)=>{
        if(counter < initialState) return ;
        setCounter((prev)=>prev-number);
        if(counter < 1) setCounter(0);
    }

    const add =(number = 1)=>{
        setCounter((prev)=>prev+number);
    }

    const substract = (number = 1) =>{
        setCounter((prev)=>prev-number);
        if(counter < 1) setCounter(0);
    }

    return [counter,add,substract,upVote,downVote];
}