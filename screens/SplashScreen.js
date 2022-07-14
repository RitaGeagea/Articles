import React from 'react';
import { View, Dimensions,StyleSheet,StatusBar} from 'react-native';

//Styling , Animation and UI components
import * as Animatable from 'react-native-animatable';
import assets from "../constants/assets";
import { COLORS } from '../constants/theme';
import { ButtonCmpt } from '../components/uiComponents/ButtonCmpt';
import { TextCmpt } from '../components/uiComponents/TextCmpt';
const SplashScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image style={styles.logo} source={assets.euriskoLogo} resizeMode='contain'
                     animation="bounceIn" duraton="1500"/>
        </View>
        
        <Animatable.View  style={styles.footer} animation="fadeInUpBig">
            <TextCmpt text="Stay up to date with the latest news !" type="title"/>
            <TextCmpt text="Sign in with account !" type="subTitle" textStyle={styles.text}/>
            <ButtonCmpt onPress={()=>navigation.navigate('Login')}
                        buttonContainerStyle={styles.buttonContainer}
                        buttonInnerContainerStyle={styles.buttonInnerContainer}
                        text = "Get Started"
                        iconType='MaterialIcons'
                        iconConfig={{ name:"navigate-next"}} 
                        testID='splashButton'                  
            />
        </Animatable.View>
        
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("window");
const height_logo = height * 0.35;
const headerFlex = height>600?2:1;
const styles = StyleSheet.create({
  container: {height:height, backgroundColor: COLORS.primary},
  header: {flex:headerFlex, justifyContent: 'center',alignItems: 'center'},
  footer: {
      flex:1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
      backgroundColor: COLORS.white
  },
  logo: {width: height_logo,height: height_logo},
  text: {marginTop:5},
  buttonContainer: {alignItems: 'flex-end',marginTop: 30},
  buttonInnerContainer: { width: 150,height: 40},
 
});