import 'react-native-gesture-handler';
// import OverviewScreenNavigation from './src/components/navigations/OverviewScreenNavigation';
import Overview from './src/components/overview/Overview';

// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { RootSiblingParent } from 'react-native-root-siblings';

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
  
  return <Overview />;

}