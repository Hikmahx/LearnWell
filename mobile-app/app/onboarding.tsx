import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
// import tw from "twrnc";
import tw from "../lib/tailwind";
import BgImage from "../assets/images/bg.svg";
import Logo from "../assets/images/logo-white.svg";
import HeroImg from "../assets/images/hero-img.svg";
// import Svg, { Path, Rect, SvgXml } from "react-native-svg";
import { Link } from "expo-router";
import Circle from "../assets/images/circle-blur-2.png";
import Square from "../assets/images/square.svg";
import Triangle from "../assets/images/triangle.svg";

const Onboarding = () => {
  return (
    <View style={[tw`relative h-full w-full bg-blue pb-12`, { fontFamily: 'OpenSans_400Regular' }]}>
      {/* <BgImage style={tw`w-full  h-[796px] absolute inset-x-0 `} /> */}
      <View style={tw`px-4 items-center`}>
        <View style={tw`mt-16 mb-6 items-center`}>
          <Logo style={tw`mx-auto mb-5`} />
          <Text style={tw`text-gray w-40 text-center mx-auto`}>
            Unlocking knowledge, one lesson at a time
          </Text>
        </View>
        <View style={tw`w-full`}>
          <View style={tw`absolute inset-0 w-full h-full -z-10`}>
            <Image source={Circle} style={tw`h-full -z-10`} />
          </View>
          <HeroImg style={tw`m-auto mb-10 relative z-20 w-full`} />
          <View style={tw`absolute -left-20 -bottom-1/4 w-full h-full -z-10`}>
            <Image source={Circle} style={tw`h-full -z-10`} />
          </View>
        </View>
        <TouchableOpacity
          style={tw`bg-yellow py-3 rounded-full w-full max-w-md mt-4`}
        >
          <Link style={tw`font-semibold text-lg text-black text-center mx-auto w-full`} href="/register">Get Started</Link>
        </TouchableOpacity>
        <Square style={[tw`absolute left-0 top-1/4`, { zIndex: -1 }]} />

        <Triangle style={tw`absolute right-0 top-1/2`} />
      </View>
    </View>
  );
};

export default Onboarding;
