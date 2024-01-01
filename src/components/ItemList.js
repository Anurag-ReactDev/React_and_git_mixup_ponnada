import url from "../utils/constants";
const ItemList = ({listData})=>{
    console.log(listData)
    // console.log(moreDetailedData)
//     moreDetailedData.map((ItemsBasedonCategory)=>{
//         console.log(ItemsBasedonCategory?.card?.info?.category);
//         console.log(ItemsBasedonCategory?.card?.info?.name);
// })

    return(
        
        <div className="flex m-2 bg-violet-100 border-2 border-slate-50 rounded-lg px-5">
            <div >
            {listData.map((itemDetails)=><div>
                <img className="w-60 h-40 " src={url +itemDetails?.card?.info?.imageId}></img>
                <p className="font-bold">{itemDetails?.card?.info?.name}</p> <p>{itemDetails?.card?.info?.description} </p> - <span className="text-red-500">₹{itemDetails?.card?.info?.price/100}</span></div>)} 
            </div>
        </div>
            
       
    )
    
}

export default ItemList;