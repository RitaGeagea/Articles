import { useState } from "react";

//For Loading Fonts
import * as Font from 'expo-font';

//redux:
import { store } from './store/store';
import { Provider} from 'react-redux';

//Root Nav
import Root from  "./navigation/RootNavigator";


export default function App() {
  //Load Fonts
const [fontLoaded, setFontLoaded] = useState(false);
async function loadFonts() {
  try { await Font.loadAsync({
    'InterBold': require("./assets/fonts/Inter-Bold.ttf"),
    'InterSemiBold': require("./assets/fonts/Inter-SemiBold.ttf"),
    'InterMedium': require("./assets/fonts/Inter-Medium.ttf"),
    'InterRegular': require("./assets/fonts/Inter-Regular.ttf"),
    'InterLight': require("./assets/fonts/Inter-Light.ttf"),
    }); setFontLoaded(true); 
  } catch (error) { return null;}
}
if(!fontLoaded){loadFonts(); return null;}
  return (
    <Provider store={store}>
     <Root/>
    </Provider>
  );
}


