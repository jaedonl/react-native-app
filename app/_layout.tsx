import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "./globals.css";
import GlobalProvider from "@/lib/global-provider";

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import { enableScreens } from 'react-native-screens';
enableScreens();

export type RootStackParamList = {
  Tabs: undefined;
  ProductDetail: { id: number };
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <GlobalProvider>
        <GestureHandlerRootView>
        <Stack 
          screenOptions={{ 
            headerShown: false,
            animation: "slide_from_right",
            gestureEnabled: true, 
          }} 
        />
        </GestureHandlerRootView>
      </GlobalProvider>
  );
}
