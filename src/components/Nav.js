import { Link } from "react-router-dom";
export default function Nav(){
    return(
        <div className="link">
            
            <div>
            <Link to="/"><h2>Home</h2></Link>
            </div>
            <div>
            <Link to="/about"><h2>About</h2></Link>
            </div>
          
           
        </div>
    )
}