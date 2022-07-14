import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import {TextCmpt} from './TextCmpt';

function LoadingOverlay(props) {
  return (
    <View style={styles.rootContainer}>
      <TextCmpt text={props.message} type="label" textStyle={styles.message}/>
      <ActivityIndicator size="large" color={COLORS.secondary}/>
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor:COLORS.primary
  },
  message: { marginBottom: 12}
});