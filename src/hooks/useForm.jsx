import { useState } from "react"


export const useForm = (initialState)=>{

    const [inputValue,setInputValue] = useState(initialState);

    const reset = ()=>{
        setInputValue(initialState);
    }

    const handleInput = ({target})=>{
        setInputValue(target.value);
    }

    const handleSubmit = (e,type,obj)=>{
        e.preventDefault();
        if(inputValue.length > 30){
            type(obj);
            reset();
        }
    }


    return [inputValue,handleInput,handleSubmit];
}