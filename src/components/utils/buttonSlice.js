import { createSlice } from "@reduxjs/toolkit";

const buttonSlice  = createSlice ( {
    name:"app",
    initialState : {items:[]},
    reducers : {
        Items : (state,action) => {
           state =  state.items.push(action.payload)
        },
        addItems : (state,action) => {
            
        }

    }

})
export const {Items} = buttonSlice.actions;
export default buttonSlice.reducer;