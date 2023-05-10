import { SafeAreaView, Text, View, Image } from "react-native";
import { Head } from "expo-head";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "../lib/tailwind";
import { Link } from "expo-router";
import Logo from "../assets/images/logo-white.svg";
import Square from "../assets/images/square.svg";
import Triangle from "../assets/images/triangle.svg";
import Circle from "../assets/images/circle-blur.png";
import { StyleSheet } from "react-native";
// import { BlurView } from '@react-native-community/blur';
// import FastBlurView from 'react-native-blur';
// import { BlurView } from "expo-blur";

export default function App() {
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.navigate('/onboarding');
  // }, []);

  return (
    <SafeAreaView
      style={tw`font-['Open Sans'] bg-red-400 h-full w-full bg-blue`}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>My App</title>
        <meta name="description" content="My App description" />
      </Head>
      <View style={tw`w-full h-full items-center justify-center `}>

        {/* <View
          style={tw`w-[120px] h-[120px] bg-white rounded-full absolute right-0 top-0`}
        >
        </View> */}
        {/* <View style={[tw`w-24 h-24 rounded-full bg-white`, { blurRadius: 120 }]} /> */}

        <View>
          <Image source={Circle} style={tw`absolute top-0 `} />
        </View>
        <Square style={tw`absolute left-0 top-1/4`} />
        <Logo style={tw`m-auto`} />
        <Triangle style={tw`absolute right-0 top-1/2`} />
        {/* <Link href="/onboarding" style={tw`bg-blue font-bold py-3 text-white text-lg text-center rounded-full`}>Onboarding</Link> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    // filter: blur(200px);
    // Changed filter to use the `blur` property with a value of 10
    // blurRadius: 120,
  },
});
