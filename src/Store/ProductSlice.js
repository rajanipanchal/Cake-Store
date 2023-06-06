import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isLoading : false,
    isSuccess : false,
    isError : false,
    product :[]
}
const ProductSlice = createSlice({
    name : "product",

    initialState,
    reducers :{

    },
    extraReducers :(builder)=>{
        // builder
        // .addCase(pending,(state)=>{
        //     state.isLoading = true
        // })

    }
    
})
export default ProductSlice.reducer