import { useRef, useState ,} from "react"
import {useNavigate} from "react-router-dom"
import "./game.css"
const Game=()=>{
    const [score,setScore]=useState(0)
    const [data,setData]=useState()
    const [dice,setDice]=useState(1)
    const [error,setError]=useState()
    const ref=useRef(null)
    const navigate=useNavigate()

   

    const Random_no=(min,max)=>{
         return Math.floor(Math.random()*(max-min)+min);
        
    }

    const Role_dice=()=>{
        console.log(data)
        
        setData(undefined)
        
        if(!data){
            setError("select the number here")
            return
        }else{
            setError("")
        }
        

        const randomnumber=Random_no(1,7)
        setDice((prev)=>randomnumber)
        console.log(randomnumber)
        

        if(data==dice){
           setScore((prev)=>randomnumber+1)
           const num= ref.current
           num.style.backgroundColor="LightGreen"
        }else{
            setScore((prev)=>prev - 2)
        }
    }

    const reset=()=>{
        setScore(0)
    }

    const rules1=()=>{
        navigate("/rules")
    }
   return(
    <>
   
    <div className="main1" ref={ref}>
    <div className="nav">
        <div className="score">
            <h1>{score}</h1>
            <p>Score</p>
        </div>
        <div className="numbers">
        <div > <p>{error}</p> </div>
            <div className="boxes">
            <box onClick={()=>setData(1)} >1</box>
            <box onClick={()=>setData(2)} >2</box>
            <box onClick={()=>setData(3)} >3</box>
            <box onClick={()=>setData(4)} >4</box>
            <box onClick={()=>setData(5)} >5</box>
            <box onClick={()=>setData(6)} >6</box>
            </div>
           <div className="para"> <p>Select Number</p> </div>
            
        </div>
    </div>
      <div className="foot">
        <div className="image" onClick={Role_dice}>
            <img src={`/image/dice_${dice}.png`} alt="#" />
        </div>
           <div> <p>Click On The Dice To Role</p></div>
           <div className="butt"> <button onClick={reset}>RESET</button></div>
           <div className="butt"> <button onClick={rules1}>GAME RULES</button></div>
           
      </div>
    </div>
    </>
   )
}
export default Game