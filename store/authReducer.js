import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token:'',
    isAuthenticated:false
  },
  reducers: {
    authenticate: (state, action) => { state.token=action.payload; state.isAuthenticated=true; AsyncStorage.setItem('token', state.token);},
    logout: (state)=>{state.token=''; state.isAuthenticated=false; AsyncStorage.removeItem('token');}
  }
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;

