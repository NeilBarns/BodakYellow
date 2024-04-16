import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import MainNavigation from './src/components/navigations/NavigationMain';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./src/fonts/Nunito-Bold.ttf'),
    'Poppins-Regular': require('./src/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
    return null;
  } 
  
  return <MainNavigation />;

}