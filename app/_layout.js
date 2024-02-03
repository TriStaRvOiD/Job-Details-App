import { Stack } from "expo-router";
import { useCallback } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// // SplashScreen.preventAutoHideAsync();

const Layout = () => {
  //   const [fontsLoaded, fontsError] = useFonts({
  //     JosefinSansBold: require("../assets/fonts/JosefinSans-Bold.ttf"),
  //     JosefinSansRegular: require("../assets/fonts/JosefinSans-Regular.ttf"),
  //     JosefinSansMedium: require("../assets/fonts/JosefinSans-Medium.ttf"),
  //   });

  //   const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded || fontsError) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [fontsLoaded, fontsError]);

  //   if (!fontsLoaded && !fontsError) return null;

  return <Stack />;
};

export default Layout;
