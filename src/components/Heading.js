import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";

const Heading = ()=>{
    
    console.log("Heading rendered")
    
    var status = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //subscribing to store using selector
    const Cartitems = useSelector((appStore)=>appStore.cart.items);
    console.log(Cartitems)
    // console.log({data})
    //function to provide symbol to show related status
    const Symbol = ()=>{
        if(status == "true"){
            console.log("rendering symbol")
            return '✅';
        }else{
            console.log("rendering symbol")
            return '❌';
        } ;
    }
   

    return(
        <div className="flex flex-wrap justify-between my-2 bg-indigo-300 py-10">
            <div>
                <h1>
                    Swiggy Clone
                </h1>
            </div>

            <div >
                <ul className="flex flex-wrap" >
                    <li className="mx-2 p-3 rounded-lg hover:bg-green-200">
                       OnLine Status:{Symbol()}
                    </li>
                    <li className="mx-2 p-3 rounded-lg hover:bg-green-200">
                        <Link to="/">Home</Link>
                    </li>
                    {/* <a href="/">
                        <li style={{display:"inline",margin:"1rem"}}>
                            Home
                        </li>
                    </a> */}
            
                    <li className="mx-2 p-3 rounded-lg hover:bg-green-200">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2 p-3 rounded-lg hover:bg-green-200">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mx-2 p-3 rounded-lg hover:bg-green-200">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="mx-2 p-3 rounded-lg hover:bg-green-200">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li className="mx-2 p-3 rounded-lg hover:bg-red-200">
                        {loggedInUser}
                    </li>
                    <li className="mx-2 p-3 rounded-lg hover:bg-red-200">
                        Cart Items {Cartitems.length}
                    </li>
                   
                  
                </ul>
            </div>
        </div>
          
    )
}

export default Heading;