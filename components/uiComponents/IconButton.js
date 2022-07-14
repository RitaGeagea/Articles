import {View, TouchableOpacity} from 'react-native';

//Icon packages
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";
import Feather from 'react-native-vector-icons/Feather';

//Styling
import { COLORS } from "../../constants/theme";

export function IconButton (props){
    const color= COLORS.white; 
    const size= 20;
   
        return(
            <View><TouchableOpacity onPress={props.onPress} >
        {props.type=="Ionicons"&&(<Ionicons color={color} size={size} {...props.iconConfig}/>)}
        {props.type=="MaterialIcons"&&(<MaterialIcons color={color} size={size} {...props.iconConfig}/>)}
        {props.type=="Feather"&&(<Feather color={color} size={size} {...props.iconConfig}/>)}
        </TouchableOpacity></View>  )}
 