
import url from "../utils/constants";
const Cards = (props)=>{
    const{cloudinaryImageId,id,name,cuisines,avgRating,locality,areaname,costForTwo,sla} = props?.cardData;
    var dummyKey = Object.keys(props.cardData).length; //just to handle unique key problem in cuisines which uses li
    // console.log(typeof dummyKey)
    return(
        <div className="cards-component">
            <img style={{height:"200px",width:"250px"}} src={url+cloudinaryImageId}></img>
            {/* <h1>{id}</h1>  */}
            <h1>{name}</h1>
            
            <ul>
                <li style={{fontStyle:"oblique"}}><h2>cuisines:</h2></li>
               {cuisines.map((each_cuisine)=>{return <li key={dummyKey = dummyKey -1}><h2>{each_cuisine}</h2></li>})}
            </ul>
            <h1>Rating : {avgRating}</h1>
            <h1>🗺️ {locality}</h1>
            <h1>{areaname}</h1>
            <h1>Cost for Two: 💰{costForTwo}</h1>
            <h1>Delivery Time: ⌛{sla.deliveryTime}</h1>
        </div>
    )
}
export default Cards;