import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState : {
       user : null
    },
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload;
        }
    }

});


const { actions, reducer } = slice;
const { setUser } = actions;


export {setUser};
export default reducer;