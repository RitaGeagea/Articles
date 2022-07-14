import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

//Styling and other ui components
import { COLORS, SIZES} from '../../constants/theme';
import assets from "../../constants/assets";
import {ImageCmpt} from "../uiComponents/ImageCmpt";
import Input from "../uiComponents/Input";
import {TextCmpt} from "../uiComponents/TextCmpt";

import {useNavigation} from '@react-navigation/native'

const Header = (props) => {
    const navigation = useNavigation();
    return (
      <View style={styles.rootContainer}>  
          <View style={styles.imagesContainer}>
              <ImageCmpt imageConfig={{source:assets.euriskoLogo}} imageContainerStyle={styles.logo}/>     
              <Pressable onPress={()=>navigation.toggleDrawer()}>
                   <View style={styles.personImagesContainer}>
                       <ImageCmpt imageConfig={{source:assets.person01}}/> 
                       <ImageCmpt  imageConfig={{source:assets.badge}} imageStyle={styles.personBadge}/>           
                    </View>
               </Pressable>
          </View>
          <View style={styles.textContainer}>
              <TextCmpt text="Hello Candidate 👋" textStyle={{color:COLORS.white}}/>
              <TextCmpt text="Let's find an article for you" textStyle={{fontSize:SIZES.large}} type="buttonText"/>      
          </View>
          <Input  inputContainerStyle={styles.searchContainer}
                  icon="search" iconType="Ionicons" iconConfig={{ color:'white', size:26}}
                  iconRight="delete" iconRightConfig={{ color:'white', size:26}} onPress={props.onPress}
                  inputInnerContainerStyle={styles.searchInnerContainer}
                  textInputConfig={{ placeholder:"Search articles",color:COLORS.primary,...props.textInputConfig}}   
             />
      </View>
  );
};

export default Header;
const styles = StyleSheet.create(
  {
    rootContainer:{backgroundColor: COLORS.primary,padding:14},
    imagesContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo:{width: 90, height: 30 },
    personImagesContainer:{ width: 45, height: 45 },
    personBadge:{
      position: "absolute",
      width: 15, height: 15,
      bottom: 0,right: 0,},
    textContainer:{ marginVertical: 14 },
    searchContainer:{ marginTop: 14 },
    searchInnerContainer:{
      width: "100%",
      borderRadius: SIZES.font,
      backgroundColor: COLORS.gray,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small - 2,
      borderBottomWidth: 0,
    }
  }
);
