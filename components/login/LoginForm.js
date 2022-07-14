import { useState , useEffect} from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform,ScrollView} from 'react-native';

//Styling and ui components
import {COLORS} from '../../constants/theme';
import Input from '../uiComponents/Input';
import {TextButton} from "../uiComponents/TextButton";
import {ButtonCmpt} from "../uiComponents/ButtonCmpt";
import Validate from "./Validate";
function LoginForm(props) {
    const [inputs, setInputs] = useState({
        username: {value:'',isValid: true, errorMessage:"null"},
        password: {value:'',isValid: true,errorMessage:"null"}
        });
    //Handling is password is secured or not
    const [securePasswod, setSecurePassword] = useState(true);
    function secureHandler(){setSecurePassword(!securePasswod);}

    //handling if Log in button is enabled or not
    const [disableButton, setDisableButton] = useState(true);
    const disableButtonHandler = useEffect (()=>{
      if(inputs.username.isValid&&inputs.password.isValid&&inputs.username.value.length>0&&inputs.password.value.length>0)
      {setDisableButton(false);}else{setDisableButton(true)}
    },[inputs])
   
  
    //handling enterred values from user
    function inputChangedHandler(inputIdentifier, enteredValue) {
      const validationOutput = Validate({enteredValue:enteredValue,inputIdentifier:inputIdentifier});
    setInputs((curInputs) => 
        {return { ...curInputs,[inputIdentifier]: { value: enteredValue, isValid:validationOutput.isValid, errorMessage:validationOutput.errorMessage }};});
    }
    function submitHandler() {props.onSubmit(inputs.username.value,inputs.password.value);}
    
    //for canceling
    function cancelHandler(){
      setInputs({
      username: {value:'',isValid: false,errorMessage:"Invalid Username - Too Short"},
      password: {value:'',isValid: false,errorMessage:"Invalid Password - Too Short"},
      })}

    
    
  return (
    <ScrollView>
    <KeyboardAvoidingView keyboardVerticalOffset={30} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Input  label='Username' 
              validate={true}
              icon='user' 
              inValid={!inputs.username.isValid}
              errorMessage={inputs.username.errorMessage}
              textInputConfig={{ 
                placeholder:"Your Username",
                value: inputs.username.value,
                onChangeText: inputChangedHandler.bind(this, 'username') }}
              inputContainerStyle={styles.inputContainerStyle}
              inputInnerContainerStyle={styles.inputInnerContainerStyle}
             />
      <Input  label='Password' 
              icon='lock' 
              validate={true}
              iconRight="eye" onPress={secureHandler}
              inValid={!inputs.password.isValid}
              errorMessage={inputs.password.errorMessage}
              textInputConfig={{   
                placeholder:"Your Password",
                value: inputs.password.value,          
                onChangeText: inputChangedHandler.bind(this, 'password'),
                secureTextEntry:securePasswod }} 
              inputContainerStyle={styles.inputContainerStyle}
              inputInnerContainerStyle={styles.inputInnerContainerStyle}
             />
      <TextButton text="Forgot password?" textStyle={{color: COLORS.green, marginTop:15}}/>   
      <ButtonCmpt onPress={submitHandler}
                  buttonContainerStyle={styles.buttonContainer}
                  buttonInnerContainerStyle={styles.buttonInnerContainer}
                  text="Log In"
                  disabled={disableButton}                
            />
      <ButtonCmpt onPress={cancelHandler}
                  buttonContainerStyle={styles.buttonContainer}
                  buttonInnerContainerStyle={styles.buttonInnerContainer}
                  text="Cancel"               
            />
      </KeyboardAvoidingView>
      </ScrollView>

  );
}

export default LoginForm;

const styles = StyleSheet.create({
  buttonContainer: { marginTop: 50,},
  buttonInnerContainer:{ minWidth: 150,height: 40},
  inputContainerStyle:{marginHorizontal: 4, marginVertical: 8},
  inputInnerContainerStyle:{
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor:COLORS.veryLightGray,
    paddingBottom: 5, }
});