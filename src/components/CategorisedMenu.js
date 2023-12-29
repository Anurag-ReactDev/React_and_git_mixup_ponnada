const CategorisedMenu = ({data})=>{
    console.log("Catergorised menu..")
    const filterBasedonCategories = data.cards.filter((items)=>items?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return(
        <div className="text-center mx-96"> 
            <ul>
                {filterBasedonCategories.map((CategorisedData)=>{
                    return(
                    <li className="p-4 border-2 border-slate-200 flex justify-between">
                        {CategorisedData?.card?.card?.title}  ({CategorisedData?.card?.card?.itemCards.length}) <span>🔽</span>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategorisedMenu;