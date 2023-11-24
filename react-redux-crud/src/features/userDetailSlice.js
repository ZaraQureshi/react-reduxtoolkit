import { createSlice,createAsyncThunk, combineReducers } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../common/api';
const baseURL = api.defaults.baseURL;
export const createUser=createAsyncThunk("createUser",async (data,{rejectWithValue})=>{
    try{
        const response=await axios.post(baseURL,{
        name:data.name,
        email:data.email,
        age:data.age,
        gender:data.gender
    })
        return response;
    }catch(error){
        return rejectWithValue(error);
    }
})

export const userDetail=createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading=true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload.message;
        }
    }
})
export default combineReducers({
    userDetail:userDetail.reducer,
})


 