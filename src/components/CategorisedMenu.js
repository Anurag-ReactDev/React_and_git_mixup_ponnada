import ItemList from "./ItemList"
const CategorisedMenu = ({data})=>{
    console.log("Catergorised menu..")
    console.log(data)
    const filterBasedonCategories = data.cards.filter((items)=>items?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return(
        <div className="text-center"> 
            <ul>
                {filterBasedonCategories.map((CategorisedData)=>{
                    return(
                    <div>
                        <li className="p-4 border-2 border-slate-200 flex justify-between font-extrabold">
                            {CategorisedData?.card?.card?.title} ({CategorisedData?.card?.card?.itemCards.length}) <span>🔽</span>
                        </li>
                        <ItemList moreDetailedData = {CategorisedData?.card?.card?.itemCards}/>
                     </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategorisedMenu;