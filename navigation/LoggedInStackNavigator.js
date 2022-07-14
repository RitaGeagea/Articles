// importing screens
import DashboardScreen from '../screens/DashboardScreen';

//Stack Navigator
import {  DefaultTheme } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator(); 

// defaukt theme
const theme = {
    ...DefaultTheme,
    colors: {background: "transparent"}
  };


 export default  function StackLoggedInNav(){
    return(
      <Stack.Navigator theme={theme}  screenOptions={{headerShown: false }}>     
      <Stack.Screen name='Dashboard' component={DashboardScreen} />    
      </Stack.Navigator>        
    );
  }



