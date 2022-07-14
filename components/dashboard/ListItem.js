import React,{memo} from "react";
import { View,StyleSheet,Dimensions } from "react-native";
import { COLORS, SIZES, SHADOWS,FONTS} from '../../constants/theme';
import assets from "../../constants/assets";
import {ButtonCmpt} from "../uiComponents/ButtonCmpt";
import {ImageCmpt} from "../uiComponents/ImageCmpt";
import {TextCmpt} from "../uiComponents/TextCmpt";

function getFormattedDate(date) {return date.slice(0, 10);}
const defaultImageUrl="https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png";

const ListItem = (props) =>{
  const {height} = Dimensions.get("window");
  const isSmallScreen = height>600?false:true;
  const imageUrl = props.item.imageUrl.trim().length>5?props.item.imageUrl:defaultImageUrl;
    return(
        <View  style={styles.rootContainer}>
              <ImageCmpt  imageConfig={{source:{uri:imageUrl}, resizeMode:"cover"}}
                          imageContainerStyle={styles.imageContainerStyle}
                          imageStyle={styles.imageStyle}/>
              <View style={styles.authorAndDateContainer}>
                    <ImageCmpt  imageConfig={{source:assets.man}}
                                imageStyle={styles.authorImageStyle}/> 
                  {!isSmallScreen && <TextCmpt text={props.item.author} type="smallMessage" textStyle={styles.authorText}/> }
                    {isSmallScreen &&<View style={{alignItems:'flex-end', }} >
                    <TextCmpt text={props.item.author} type="smallMessage" textStyle={styles.authorText}/>
                    <TextCmpt text={getFormattedDate(props.item.publishedDate)} type="date" textStyle={{color:COLORS.secondary}} />
                    </View>} 
                   {!isSmallScreen &&<View style={styles.dateContainer}>
                          <TextCmpt text="Published in" type="smallMessage" textStyle={{color: COLORS.primary}}/>
                          <TextCmpt text={getFormattedDate(props.item.publishedDate)} type="date" />
                    </View>}
              </View>             
              <View style={styles.descriptionContainer}>
                    <TextCmpt text={props.index + "- " +props.item.headline.trim()} type="label" textStyle={{color: COLORS.primary}}/>
                    <TextCmpt text={props.item.sectionName} type="smallMessage" textStyle={{color:COLORS.green, fontFamily: FONTS.semiBold}}/>
                    <TextCmpt text={props.item.abstract} type="smallMessage" textStyle={{color: COLORS.primary}}/> 
              </View>
              <ButtonCmpt
                    text="View more"
                    textStyle={{fontFamily:FONTS.semiBold,textAlign: "center"}}
                    buttonContainerStyle={{marginBottom:SIZES.font, marginHorizontal:SIZES.base}}
                    buttonInnerContainerStyle={styles.buttonInnerContainerStyle}/>           
        </View>
    );
}
export default memo(ListItem);
const styles = StyleSheet.create(
  {
    rootContainer:{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    },
    imageContainerStyle:{width: "100%",height: 250},
    imageStyle:{borderTopLeftRadius: SIZES.font,borderTopRightRadius: SIZES.font},
    authorAndDateContainer:{
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: 'flex-start',
    },
    authorImageStyle:{width: 50,height: 50,marginTop:-SIZES.base},
    authorText:{ marginTop:25, minWidth:150},
    dateContainer:{
      marginLeft:30, 
     paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: "50%",
    },
    descriptionContainer:{ width: "100%", padding: SIZES.font },
    buttonInnerContainerStyle:{
      minWidth:120, height:45,
      marginBottom:SIZES.font,
      backgroundColor: COLORS.primary,
      padding: SIZES.small,
      borderRadius: SIZES.large}
  }
);
