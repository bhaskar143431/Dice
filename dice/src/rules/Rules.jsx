import { useNavigate } from "react-router-dom"
import "./rules.css"
const Rules=()=>{
  const navigate=useNavigate()
    const goback=()=>{
      navigate("/playgame")
    }

    return(
        <>
        <div className="main3">
            <h1>How to play dice game</h1>
            <p>Select any number <br />Click on dice image <br />after click on  dice  if selected number is equal to dice number you will get same point as dice <br />if you get wrong guess then  2 point will be dedcuted </p>
        </div>
        <button onClick={goback} className="lastbutton">BACK TO GAME</button>
        </>
    )
}
export default Rules