import {  useEffect, useState } from 'react';

//redux:
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authReducer';

//storing in device's memory
import AsyncStorage from '@react-native-async-storage/async-storage';

// importing screens
import SplashScreen from '../screens/SplashScreen';
//Stack Navigator
import { NavigationContainer } from "@react-navigation/native";
import StackLoginNav from "./LoginStackNavigator";
import DrawerNav from "./DrawerNavigator";

function Navigation() {
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  return ( 
    <NavigationContainer>
 {isAuth&& <DrawerNav />}
{!isAuth && <StackLoginNav />} 
    </NavigationContainer>
  );
}  

export default function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);
    const dispatch = useDispatch();
  
    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem('token');  
        if (storedToken) { dispatch(authenticate(storedToken));}
        setIsTryingLogin(false);
      }
      fetchToken();
    }, []);
  
    if (isTryingLogin) {return <SplashScreen/>;}
    return <Navigation />;
  }
 