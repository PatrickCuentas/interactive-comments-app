
export const ReplyCard =({children})=>{
    
    return (
        <div className="flex w-[90%] ml-auto fl">
                <div className="vertical-line m-5"></div>
                <div className="flex-auto">{children}</div>
        </div>
    )
}