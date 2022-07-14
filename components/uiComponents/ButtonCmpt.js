import { View, TouchableOpacity,StyleSheet} from 'react-native';
import { Icon } from './Icon';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { TextCmpt } from './TextCmpt';
export function ButtonCmpt (props){
 
    return(
        <View style={[styles.buttonContainer,{...props.buttonContainerStyle}]}>
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} testID={props.testID}>
            <View style={[styles.buttonInnerContainer,props.disabled&&{opacity:0.7},{...props.buttonInnerContainerStyle}]}>
            <TextCmpt text={props.text} type="buttonText" textStyle={{...props.textStyle}}/>
            {props.iconType&& <Icon type={props.iconType} iconConfig={{...props.iconConfig}}/>}
            </View>
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer:{},
    buttonInnerContainer:{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',
                        borderRadius: 50,backgroundColor: COLORS.primary, width:'100%', height:'100%'},
    textButton: { fontFamily:FONTS.bold,color: COLORS.white,fontSize: SIZES.font}
})