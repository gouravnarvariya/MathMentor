import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./buttonSlice";

 const store = configureStore(
    {  reducer :{ 
        app:buttonSlice,
        }

    }
 )
 export default store;