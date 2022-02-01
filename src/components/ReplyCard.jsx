
export const ReplyCard =({children})=>{
    
    return (
        <div className="flex w-[95%] ml-auto mt-[-1.25rem] mb-[-1.25rem]">
                <div className="vertical-line m-5"></div>
                <div className="flex-auto">{children}</div>
        </div>
    )
}