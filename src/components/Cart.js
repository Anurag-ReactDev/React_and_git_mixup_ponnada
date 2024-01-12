import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import ItemList from "./ItemList";
const Cart = ()=>{
    const cartItemsInCartPage = useSelector((appStore)=>appStore.cart.items);
    return(
        <div className="w-6/12 m-auto">
            <h1 className="text-center font-extrabold">Your Cart</h1>
        <ItemList listData={cartItemsInCartPage}/>
        </div>
    )
}

export default Cart;