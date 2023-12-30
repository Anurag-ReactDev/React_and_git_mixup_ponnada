const ItemList = ({moreDetailedData})=>{
    console.log("ItemCards....")
    console.log(moreDetailedData)
//     moreDetailedData.map((ItemsBasedonCategory)=>{
//         console.log(ItemsBasedonCategory?.card?.info?.category);
//         console.log(ItemsBasedonCategory?.card?.info?.name);
// })
    return(
        <div>
            <ul className="font-normal">
                {moreDetailedData.map((ItemsBasedonCategory)=>{
                    return(
                        <li className="flex m-2 bg-violet-100 border-2 border-slate-50 rounded-lg">
                            {ItemsBasedonCategory?.card?.info?.name} - <span>₹{ItemsBasedonCategory?.card?.info?.price/100}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
       
    )
    
}

export default ItemList;