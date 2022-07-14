import { View , Image, StyleSheet} from 'react-native';

export function ImageCmpt (props){
    return(
        <View style={[styles.imageContainer,{...props.imageContainerStyle}]}>
            <Image style={[styles.image,{...props.imageStyle}]} resizeMode="contain" {...props.imageConfig}/>     
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer:{justifyContent:'center', alignItems:'center'},
    image:{ width: "100%", height: "100%"}
  })