import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Head } from "expo-head";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  OpenSans_700Bold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "../lib/tailwind";
import { Link, useRouter } from "expo-router";
import Logo from "../assets/images/logo-white.svg";
import Square from "../assets/images/square.svg";
import Triangle from "../assets/images/triangle.svg";
import Circle from "../assets/images/circle-blur.png";

  const App = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular,
    // OpenSansSemiBoldItalic:
    //   "https://rsms.me/OpenSans/font-files/OpenSans-SemiBoldItalic.otf?v=3.12",
  });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.push("/onboarding");
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     "Open Sans": {
  //       uri: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap",
  //     },
  //   });
  // };

  // useEffect(() => {
  //   loadFonts();
  // }, []);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      // navigation.navigate("onboarding" as never);
      const timeout = setTimeout(() => {
        router.push("/onboarding");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={[tw`h-full w-full bg-blue`]} onLayout={onLayout}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>My App</title>
        <meta name="description" content="My App description" />
      </Head>
      <View style={tw`w-full h-full items-center justify-center `}>
        <View>
          <Image source={Circle} style={tw`absolute top-0 `} />
        </View>
        <Square style={tw`absolute left-0 top-1/4`} />
        <Logo style={tw`m-auto`} />
        <Triangle style={tw`absolute right-0 top-1/2`} />
      </View>
    </SafeAreaView>
  );
}

export default App;

