
const handleDefaultClick =()=>{console.log("No hay accion xd")}

export const Button = ({Logo,text = "Default",color = "#000",handler =handleDefaultClick})=>(
    <button onClick={handler} className="flex items-center gap-2 hover:opacity-40">
        {Logo}
        <span className={`text-xl font-semibold ${color}`}>{text}</span>
    </button>
)