import url from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemList = ({listData})=>{
    console.log(listData)
    // console.log(moreDetailedData)
//     moreDetailedData.map((ItemsBasedonCategory)=>{
//         console.log(ItemsBasedonCategory?.card?.info?.category);
//         console.log(ItemsBasedonCategory?.card?.info?.name);
// })
const dispatch = useDispatch();
const handleClick= (itemDetails)=>{
    dispatch(addItems(itemDetails))
}
    return(
        
        <div className="flex m-2 bg-violet-100 border-2 border-slate-50 rounded-lg px-5">
            <div className="w-6/12 m-auto">
            {listData.map((itemDetails)=><div className="py-3">
                <button className="border-2 border-yellow-200 bg-pink-500 absolute rounded-lg" onClick={()=>{handleClick(itemDetails)}}>Add +</button>
                <img className="w-60 h-40 " src={url +itemDetails?.card?.info?.imageId}></img>
                <p className="font-bold">{itemDetails?.card?.info?.name}</p> 
                <p>{itemDetails?.card?.info?.description} </p>
                 - <span className="text-red-500">₹{itemDetails?.card?.info?.price/100}</span>
                 </div>
                 )} 
            </div>
        </div>
            
       
    )
    
}

export default ItemList;