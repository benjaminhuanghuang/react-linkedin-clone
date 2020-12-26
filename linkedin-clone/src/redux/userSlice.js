import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice(
  {
    name:'user',
    initialState :{
      user: null
    },
    reducers: {
       login: (state, action)=>{  

       },
       logout: (state, action) =>{

       }
    }
  }
)


export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;



