// importing screens
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

//Stack Navigator
import {  DefaultTheme } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator(); 

// defaukt theme
const theme = {
    ...DefaultTheme,
    colors: {background: "transparent"}
  };

 export default function StackLoginNav(){
    return(
      <Stack.Navigator theme={theme} screenOptions={{headerShown: false }}>  
      <Stack.Screen name='Splash' component={SplashScreen} />     
      <Stack.Screen name='Login' component={LoginScreen}  />  
      </Stack.Navigator>   
    );
  }