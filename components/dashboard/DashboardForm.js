import React , {useState, useMemo}from "react";
import { View,  StatusBar, FlatList, StyleSheet} from "react-native";

//Styling and other ui Components
import {COLORS, SIZES} from '../../constants/theme';
import Header from "./Header";
import ListItem from "./ListItem";

//redux
import {updateFilteredArticles} from '../../store/articlesReducer';
import { useSelector, useDispatch } from 'react-redux';

const DashboardForm = (props) =>{
    const articles = useSelector((state)=>state.articles.filteredArticles);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    function searchChangeHandler(enteredValue){
            dispatch(updateFilteredArticles(enteredValue));
            return setInput(enteredValue);}
    function onDeletePressHandler(){setInput(''); searchChangeHandler('');}
    
    const renderItemHandler =(itemData)=>{return(<ListItem item={itemData.item} index={itemData.index+1}/>);}
    const memoizedValue = useMemo(() => renderItemHandler, [articles]);
    return (
        <View style={styles.container} >      
        <StatusBar  backgroundColor={COLORS.primary} barStyle="light-content" />                     
                <FlatList 
                  contentContainerStyle={{ paddingBottom: 150 }} 
                  onEndReached={props.onEndReached.bind(this, input.length)} 
                  data={articles}
                  renderItem={memoizedValue} 
                  keyExtractor={(item, index)=>index}
                  showsVerticalScrollIndicator={false}
                  initialNumToRender={4} 
                  ListHeaderComponent={
                        <Header 
                            textInputConfig ={{value:input, onChangeText:searchChangeHandler }} 
                            onPress={onDeletePressHandler}/>}
                />
                <View style={styles.formContainer}>
                    <View style={styles.backgroundHeader} />
                    <View style={styles.background} />
                 </View>       
        </View>
    );

}

export default DashboardForm;
const styles = StyleSheet.create(
  {
    container:{flex:1},
    formContainer:{position: "absolute",top: 0,bottom: 0,right: 0,left: 0,zIndex: -1,},
    backgroundHeader: { height: 300, backgroundColor: COLORS.primary },
    background:{ backgroundColor: COLORS.white }
  }
);