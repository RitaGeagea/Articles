import { StyleSheet, Text, TextInput, View , Alert, Platform} from 'react-native';

//Styling, ui components and animation
import { COLORS} from '../../constants/theme';
import * as Animatable from 'react-native-animatable';
import {TextCmpt} from "./TextCmpt";
import {IconButton} from "./IconButton";
import {Icon} from "./Icon";


function Input(props) {

  return ( 
    <View style={[styles.inputContainer,{...props.inputContainerStyle}]}>
        {props.label&&<TextCmpt  textStyle={styles.label} text={props.label+':'} type='label'/>}
        <View style={[styles.inputInnerContainer,{...props.inputInnerContainerStyle}]}>
            {props.icon&& 
            <Icon type={props.iconType?props.iconType:"Feather"} 
                iconConfig={{ name:props.icon,color:props.inValid?'red':COLORS.gray,...props.iconConfig}}/>
            }
            <TextInput style={styles.input} {...props.textInputConfig} autoCapitalize='none'
                placeholderTextColor={COLORS.secondary}/>
               
            {props.iconRight&&
             <IconButton    type={props.iconRightType?props.iconType:"Feather"} onPress={props.onPress}
                            iconConfig={{ name:props.iconRight,color:COLORS.gray, ...props.iconRightConfig}}/>}
            {!props.inValid&&props.label!=="Password"&&props.validate&&
                <Animatable.View animation="bounceIn">
                     <Icon type="Feather" iconConfig={{ name:"check-circle",color:"green"}}/> 
                </Animatable.View>   
            } 
         
      </View>
    { props.inValid&&props.validate&&(  
        <Animatable.View animation="fadeInLeft" duration={500}>
            <TextCmpt text={props.errorMessage}  type='smallMessage' textStyle={{color:'red'}}/>
        </Animatable.View> )
    }
    {!props.inValid&&props.validate&&(   
        <Animatable.View animation="fadeOutLeft" duration={500}>
            <TextCmpt text={props.errorMessage}  type='smallMessage'textStyle={{color:'red'}}/>
        </Animatable.View> )
        }    
    </View>);}

export default Input;

const styles = StyleSheet.create({
    inputContainer: { },
    label: {marginBottom: 4},
    inputInnerContainer: {flexDirection: 'row'},   
    input: {
        flex: 1
       
    }
  });
 