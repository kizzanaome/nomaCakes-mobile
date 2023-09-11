import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { COLORS, FONTS } from "./src/constants/theme";
import LandingScreen from './src/screens/LandingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import * as Font from "expo-font";
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './routes';
import {Provider as PaperProvider} from 'react-native-paper';

// const Stack = createNativeStackNavigator()
// SplashScreen.preventAutoHideAsync();

// const CustomText = (props) => {
//   const [fontLoaded, setFontLoaded] = useState(false)


//  
//   return (<Text style={{ ...props.style, fontFamily: 'Poppins-Regular' }}>
//     {props.children}
//   </Text>);
// };

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        [FONTS.regular]: require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
        [FONTS.medium]: require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
        [FONTS.semiBold]: require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        [FONTS.bold]: require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
        [FONTS.light]: require('./src/assets/fonts/Poppins/Poppins-Light.ttf')

      })

      // Text.fontFamily = 'Poppins-Regular';


      setFontLoaded(true);
    }

    loadFont();
  }, [])

  if (fontLoaded) {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    );
  }

  else {
    return (

      <Text>Loading...</Text>)
  }

}



