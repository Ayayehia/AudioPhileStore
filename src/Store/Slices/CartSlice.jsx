import { createSlice } from "@reduxjs/toolkit";
//There might be a problem with accesing the photo
const initialState = {items:[],totalQuantity:0}

const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        AddToCart (state,action) {
         const NewItems =  action.payload
      const exisitingItem = state.items.find((prod)=>prod.id==NewItems.id)
      state.totalQuantity++
      if(!exisitingItem){
        state.items.push({
            id:NewItems.id,
            price:NewItems.price,
            quantity:1,
            name:NewItems.name,
            image:NewItems.image,
            totalPrice:NewItems.price
        })
      }else{
        state. totalPrice+= state.price;
        // exisitingItem.quantity++;
        exisitingItem.totalQuantity+=state.quantity
      }

        },

        RemoveFromCart (state,action){
            const ID=  action.payload
            const exisitingItem = state.items.find((prod)=>prod.id==ID)
            state.totalQuantity--
            if(exisitingItem.quantity==1){
                state.items=state.items.filter((item)=>item.id!=ID)
            }else{
                state.items.quantity--;
                state.totalQuantity-=state.items.quantity
            }
        },
        RemoveAll(state) {
            state.items = []; 
            state.totalQuantity = 0; 
          },
          IncrementQuantity(state, action) {
            const productID = action.payload;
            const existingItem = state.items.find((prod) => prod.id === productID);
            if (existingItem) {
              existingItem.quantity++;
              state.totalQuantity++;
              existingItem.totalPrice += existingItem.price;

            }
          },
          DecrementQuantity(state, action) {
            const productID = action.payload;
            const existingItem = state.items.find((prod) => prod.id === productID);
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity--;
              state.totalQuantity--;
            }
          },
    },
})

export const {AddToCart, RemoveFromCart, RemoveAll ,IncrementQuantity,DecrementQuantity}=   CartSlice.actions;

export default CartSlice.reducer
