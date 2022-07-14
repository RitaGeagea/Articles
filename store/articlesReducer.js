import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',
  initialState:{
    allArticles: [], 
    filteredArticles:[]
  },
  reducers: {
    storeArticles: (state, action) => { 
       state.allArticles=[...action.payload], state.filteredArticles=[...action.payload]},
    updateFilteredArticles:
    (state, action)=>{
       state.filteredArticles=state.allArticles.filter((x)=>(x.headline.toLowerCase().includes(action.payload.toLowerCase())||x.abstract.toLowerCase().includes(action.payload.toLowerCase())||x.sectionName.toLowerCase().includes(action.payload.toLowerCase())));
      },
    addArticles:(state, action)=>{
      state.allArticles=[...state.allArticles, ...action.payload], state.filteredArticles=[...state.filteredArticles, ...action.payload];  
  }}
});

export const storeArticles = articlesSlice.actions.storeArticles;
export const updateFilteredArticles = articlesSlice.actions.updateFilteredArticles;
export const addArticles = articlesSlice.actions.addArticles;
export default articlesSlice.reducer;