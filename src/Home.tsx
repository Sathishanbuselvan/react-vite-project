import { Link,  BrowserRouter as Router } from "react-router-dom"
import img from "./assets/img.webp"
import './Home.css'

function Home() {
    return (
        <>
        <div>
        <div className="container">
        <img src={img} style={{ height: 400 }} alt="" />
        <h1>
          WELCOME TO PANDIYAN STORE
        </h1>
      
        <Link to="/login">start</Link>
        
       
      </div>
        </div>
        </>
    )
}

export default Home