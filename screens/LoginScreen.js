import React ,{useState}from "react";
import { View, Alert, StyleSheet , StatusBar,Dimensions} from "react-native";

//ui components ,styling & forms
import * as Animatable from 'react-native-animatable';
import { COLORS } from "../constants/theme";
import {TextCmpt} from "../components/uiComponents/TextCmpt";
import LoadingOverlay from "../components/uiComponents/LoadingOverlay";
import LoginForm from "../components/login/LoginForm";

//actions
import { login } from "../util/http";
import {useDispatch} from 'react-redux';
import {authenticate} from '../store/authReducer';


function LoginScreen(props) {
  
  const dispatch = useDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
    
  async function loginHandler( username, password ) {
      setIsAuthenticating(true);
      try {  
        const token = await login(username, password);
        dispatch(authenticate(token));        
      } catch (error) {  
        if(error.response && error.response.status===401)
             {  Alert.alert('Access Denied','Please check your username and password and try again');
                setIsAuthenticating(false);}
        else {  Alert.alert('Logging in failed','please try again later!');
                props.navigation.goBack();}
                 }}
    if (isAuthenticating) {return <LoadingOverlay message="Logging you in..."  />;}
    return(
      
    <View style={styles.container}>
          <StatusBar backgroundColor={COLORS.primary} barStyle="light-content"/>
          <View style={styles.header}>
            <TextCmpt text="Welcome!" type="title" textStyle={{color:COLORS.white}}/>
          </View>
           <Animatable.View  animation="fadeInUpBig"style={styles.footer}>
              <View>
               <LoginForm onSubmit={loginHandler} />
              </View>
           </Animatable.View>
    </View>
   
 );
  }
  
  export default LoginScreen;
  const {height} = Dimensions.get("window");
  const footerFlex = height>600?3:7;
  const styles = StyleSheet.create({
    container: {height:height, backgroundColor: COLORS.primary},
    header: {flex: 1,justifyContent: 'flex-end',paddingHorizontal: 20,paddingBottom: 50},
    footer: {
        flex: footerFlex,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    }
  });