import { View, Text, Button } from "react-native";
import React from "react";
// import tw from "twrnc";
import tw from '../lib/tailwind';
import BgImage from "../assets/images/bg.svg";
import Logo from "../assets/images/logo.svg";
import HeroImg from "../assets/images/hero-img.svg";
// import Svg, { Path, Rect, SvgXml } from "react-native-svg";
import { Link } from "expo-router";

const Onboarding = () => {
  return (
    <View style={tw`relative h-screen font-['Open_Sans'] font-sans`}>
      <BgImage style={tw`w-full h-[796px] absolute inset-x-0`} />
      <View style={tw`px-4`}>
        <View style={tw`mt-24 mb-9 items-center`}>
          <Logo style={tw`mx-auto mb-7`} />
          <Text style={tw`text-gray-400 w-40 text-center`}>
            Unlocking knowledge, one lesson at a time
          </Text>
        </View>
        <HeroImg style={tw`m-auto mb-10`} />
        <Link href="/" style={tw`bg-blue font-bold py-3 text-white text-lg text-center rounded-full`}>Get Started</Link>
        
      </View>
    </View>
  );
};

export default Onboarding;
