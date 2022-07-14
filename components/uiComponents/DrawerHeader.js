import { View , StyleSheet} from 'react-native';

//styling and ui components
import assets from "../../constants/assets";
import {COLORS } from '../../constants/theme';
import {ImageCmpt} from './ImageCmpt';

export default function DrawerHeader(){
    return(
    <View style={styles.headerContainer} >
       <ImageCmpt 
            imageConfig={{source:assets.person01}}
            imageContainerStyle={{Width: 45, Height: 45}}
            imageStyle={{padding:50}}/> 
    </View>
);}

const styles = StyleSheet.create({
    headerContainer:{ 
      height: 200,
      backgroundColor: COLORS.primary ,
      marginTop:-20,
      justifyContent:'center',
      alignItems:'center' }
  })