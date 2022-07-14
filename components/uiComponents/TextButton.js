import { View, TouchableOpacity} from 'react-native';
import { TextCmpt } from './TextCmpt';

export function TextButton(props){
    return(
        <View>
        <TouchableOpacity onPress={props.onPress}>
            <TextCmpt text={props.text} type="subTitle" textStyle={{...props.textStyle}}/>     
        </TouchableOpacity>
        </View>
    );
}