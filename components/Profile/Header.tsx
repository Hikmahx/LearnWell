import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const Header = () => {
  return (
    <View style={tw`flex flex-col items-center`}>
      <View
        style={tw`bg-blue h-[180px] relative w-full flex flex-col items-center `}
      >
        <View
          style={tw`w-[110px] h-[110px] rounded-full border-2 border-yellow bg-zinc-100 relative mx-auto mt-[120px]`}
        ></View>
      </View>
      <Text style={tw`mt-16 text-lg mb-6`}>Jane Doe</Text>
    </View>
  );
};

export default Header;
