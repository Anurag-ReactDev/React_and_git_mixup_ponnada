import { useState } from "react"
import ItemList from "./ItemList"
const CategorisedMenu = ({data,showItems,setShowIndex,showIndex})=>{
    const CategorisedData = data;
    const moreDetailedData = CategorisedData?.card?.card?.itemCards;
    // const[showItems,setShowItems] = useState(false);
    // console.log("ReRendered")
    const clickHanlder = ()=>{
        setShowIndex();
        console.log(showIndex)
    }
   
    // {CategorisedData?.card?.card?.title} ({CategorisedData?.card?.card?.itemCards.length}) <span>🔽</span>
    return(
        <div className="content-center cursor-pointer" onClick={clickHanlder}> 
            <div className="w-12/12 m-auto p-4 border-2 border-slate-200 flex justify-between font-extrabold content-center hover:bg-yellow-200">
                        {CategorisedData?.card?.card?.title} ({CategorisedData?.card?.card?.itemCards.length}) <span>🔽</span>    
            </div>
            {showItems &&<ItemList listData = {moreDetailedData}/>}
            
        </div>
    )
}

export default CategorisedMenu;