import { View, StyleSheet} from 'react-native';

//styling and ui components
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import DrawerHeader from '../components/uiComponents/DrawerHeader';

//redux:
import { useDispatch } from 'react-redux';
import { logout } from '../store/authReducer';

//Drawer Navigator & Screens
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator(); 
import StackLoggedInNav from './LoggedInStackNavigator';

 export default function DrawerNav(){
    const dispatch = useDispatch();
    return(
  <Drawer.Navigator 
     drawerContent={props => {
    return (     
    <View style={styles.drawerContainer}> 
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerHeader/>
        <DrawerItem label="Dashboard" onPress={()=>props.navigation.toggleDrawer()} icon={({color, size})=><Ionicons name="home" size={size} color={color} />}/>
        <DrawerItem label="Bookmark"  onPress={()=>props.navigation.toggleDrawer()} icon={({color, size})=><Ionicons name="bookmark" size={size} color={color} />}/>      
        <DrawerItem label="Settings" onPress={()=>props.navigation.toggleDrawer()} icon={({color, size})=><Ionicons name="settings" size={size} color={color} />}/>
        </DrawerContentScrollView>    
      <View style={styles.drawerBottomContainer}>
        <DrawerItem  label="Logout"  onPress={()=>dispatch(logout())} icon={({color, size})=><Ionicons name="exit" size={size} color={color} />}/> 
            </View> 
            </View>
    )
  }}
  screenOptions={{drawerPosition:'Left',headerShown:false,drawerStyle:{backgroundColor:COLORS.lightGray}}}>
    <Drawer.Screen name="Main" component={StackLoggedInNav} options={{drawerItemStyle:{height:0}}}/>  
  </Drawer.Navigator>
    );
  }
  const styles = StyleSheet.create({
    drawerContainer:{flex:1},
    drawerBottomContainer:{ justifyContent:'flex-end', marginBottom: 10,borderTopColor: COLORS.gray,borderTopWidth: 2}
  })