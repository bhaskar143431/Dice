import Home from "./homepage/Home"
import Game from "./Game/Game"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Rules from "./rules/Rules"
function App() {
   
 return(
  <>
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/playgame" element={<Game></Game>}></Route>
        <Route path="/rules" element={<Rules></Rules>}></Route>
    </Routes>
    </BrowserRouter>
  </>
 )
}
export default App