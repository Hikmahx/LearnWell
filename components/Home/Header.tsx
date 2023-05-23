import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../../assets/images/avatar.png";
import tw from "../../lib/tailwind";
import Search from "../../assets/images/search.svg";

const Header = () => {
  return (
    <View style={tw`flex-row items-center justify-between mb-16`}>
      <View style={tw`flex-row items-center`}>
        <Image source={Avatar} style={tw`w-11 h-11`} />
        <View style={tw`ml-3`}>
          <Text style={tw`text-[10px] text-gray mb-1`}>Welcome Back,</Text>
          <Text style={tw`text-base text-dark-gray font-bold`}>Jane Doe</Text>
        </View>
      </View>
      <Search />
    </View>
  );
};

export default Header;
