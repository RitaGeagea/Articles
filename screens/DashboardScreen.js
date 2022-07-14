import React, { useEffect, useState , useCallback} from "react";
import {  Alert } from "react-native";

//Forms and other components
import DashboardForm from "../components/dashboard/DashboardForm";
import LoadingOverlay from '../components/uiComponents/LoadingOverlay';

//redux and http
import { fetchArticles } from "../util/http";
import {storeArticles, addArticles} from '../store/articlesReducer';
import { useSelector, useDispatch } from 'react-redux';
import {logout } from '../store/authReducer';

const DashboardScreen = () =>{
    const storeToken = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();

    const [pageNumber, setPageNumber] = useState(0);
    const [isFetching, setIsFetching] = useState(false);   
    const [isUpdatingArticles, setIsUpdatingArticles]= useState(false);

    //Fetching articles
    const fetching = useCallback((page)=>{
    async function fetchingArticles(){
        setIsFetching(true);
        //Fetching from db
        try { 
          const articles=  await fetchArticles(storeToken, page.toString());
          if(articles.length>0){
            //Storing for the first time in our redux
         if(!isUpdatingArticles){  dispatch(storeArticles(articles));} 
            //updating our redux        
          else{ dispatch(addArticles(articles));}
          }
          else{Alert.alert("Alert","No new articles to load!");}         
        } catch (error) {
            Alert.alert("Error","Loading articles has failed please try again later..."); 
           dispatch(logout());      
        }
        setIsFetching(false);
    } fetchingArticles();
},[isUpdatingArticles]);

    useEffect(()=>{  fetching(pageNumber); } ,[pageNumber,fetching])
    
    function onEndReachedHandler(inputLength){ 
        //if inputLength of search handler >0 this will not run and no new articles will be loaded  
        if(!inputLength){
        setPageNumber(pageNumber=> pageNumber+1); setIsUpdatingArticles(true);}  
    }

    if (isFetching) {return <LoadingOverlay message="Loading articles..."  />;}
    return ( <DashboardForm onEndReached={onEndReachedHandler}/> );

}

export default DashboardScreen;