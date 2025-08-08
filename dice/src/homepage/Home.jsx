import {useNavigate} from "react-router-dom"
import "./home.css"
const Home=()=>{
     const navigate=useNavigate()
    const play=()=>{
      navigate("/playgame")
    }
    return(
        <>
        <div className="main">
            <div className="img"></div>
            <div className="text">
                <div className="innerbox">
                <div className="h1">DICE GAME</div>
                <div className="but">
                    <button onClick={play} className="button">Play Now</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home