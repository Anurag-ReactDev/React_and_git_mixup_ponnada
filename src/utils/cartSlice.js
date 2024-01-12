import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items : ['burger','pizza']
    },
    reducers:{
        addItems : (state,action)=>{        //additems to cart
            state.items.push(action.payload)
        },
        removeItems : (state,action)=>{     //remove items from cart
            state.items.pop()
        },
        clearCart : (state,action)=>{       //empty the cart
            state.items.length =0;
        }
    }
})

export const{addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;