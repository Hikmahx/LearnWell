import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Search from "../Shared/Search";
import CategoryScrollView from "./Categories";

const Header = () => {
  return (
    <View
      style={[
        tw`w-full px-6 pt-13 h-[196px]`,
        { fontFamily: "OpenSans_400Regular" },
      ]}
    >
      <View
        style={[
          tw`mx-7 px-0.5 h-full max-w-md mx-auto w-full`,
        ]}
      >
        <Search placeholder={"Search subjects or topics"} inputColor={"#F3F5F6"} />
      <CategoryScrollView />
      </View>
    </View>
  );
};

export default Header;
