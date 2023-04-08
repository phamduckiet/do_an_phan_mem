import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "product",
    initialState : {
       user : {}
    },
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload;
        }
    }

});


const { actions, reducer } = slice;
const { increaseCount, decreaseCount } = actions;


export {increaseCount, decreaseCount};
export default reducer;