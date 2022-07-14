import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import articlesReducer from "./articlesReducer";
export const store =  configureStore({
    reducer:{
        auth: authReducer,
        articles: articlesReducer
    }
});