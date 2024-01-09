
import url from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Cards = (props)=>{
    const{cloudinaryImageId,id,name,cuisines,avgRating,locality,areaname,costForTwo,sla} = props?.cardData;
    var dummyKey = Object.keys(props.cardData).length; //just to handle unique key problem in cuisines which uses li
    // console.log(typeof dummyKey)
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="m-2 p-2 bg-slate-200 hover:border-2 border-yellow-200 rounded-lg">
            <img className="w-40 h-40" src={url+cloudinaryImageId}></img>
            {/* <h1>{id}</h1>  */}
            <h1>{name}</h1>
            
            <ul>
                <li ><h2>cuisines:</h2></li>
               {cuisines.map((each_cuisine)=>{return <li key={dummyKey = dummyKey -1}><h2>{each_cuisine}</h2></li>})}
            </ul>
            <h1>Rating : {avgRating}</h1>
            <h1>🗺️ {locality}</h1>
            <h1>{areaname}</h1>
            <h1>Cost for Two: 💰{costForTwo}</h1>
            <h1>Delivery Time: ⌛{sla.deliveryTime}</h1>
            <h1>{loggedInUser}</h1>
        </div>
    )
}

//higer order function that returns card with promoted label
export const CardswithPromotedLabel = (Cards)=>{
    console.log("reached higher order function")
    return (props)=>{
        return(
            <div>
                <label className="text-white bg-black p-1 absolute">✨Promoted</label>
                <Cards {...props}/> {/*the three dots, called a spread operator indicates all the data is passed to this higher order function is passed to the component that should receive that data */}
            </div>
        )
    }
}
export default Cards;