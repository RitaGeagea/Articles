import { COLORS, SIZES, FONTS } from '../../constants/theme';
import {Text,StyleSheet} from 'react-native';

export  function TextCmpt (props){
    let style =styles.subTitle;
    if(props.type==="title"){style= styles.title} 
    if(props.type==="buttonText"){style= styles.buttonText}
    if(props.type==="label"){style= styles.label}
    if(props.type==="smallMessage"){style= styles.smallMessage}
    if(props.type==="date"){style= styles.date}

return(<Text style={[style,{...props.textStyle}]} >{props.text}</Text>);
}

const styles = StyleSheet.create({
    title: {fontFamily:FONTS.bold,color: COLORS.primary,fontSize: SIZES.huge},
    subTitle: {fontFamily:FONTS.light, color: COLORS.secondary, fontSize: SIZES.font},
    buttonText:{fontFamily:FONTS.bold,color: COLORS.white,fontSize: SIZES.font},
    label:{fontFamily: FONTS.semiBold,color:COLORS.secondary,fontSize: SIZES.large},
    smallMessage:{fontFamily: FONTS.regular,color: COLORS.gray,fontSize: SIZES.small },
    date:{fontFamily: FONTS.semiBold,color:COLORS.primary,fontSize: SIZES.medium},
})
