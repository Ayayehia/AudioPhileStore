import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    error:{
        name:"",
        email:"",
        number:"",
        adresse:"",
        zipcode:"",
        city:"",
        country:"",
        payment:"",
    }
};

const validationSlice = createSlice({
    name:"validation",
    initialState:initialState,
    reducers:{
        validation(state,action){
           const{ name,email,number,adresse, zipcode, city, country, payment}= action.payload
           if(name.length==0){
            state.name="Name Can't be empty"
           }
        }
    }
})

export const { validation} = validationSlice.actions
export default validationSlice.reducer