import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Search from "../Shared/Search";

const Header = () => {
  return (
    <ScrollView
      style={[
        tw`w-full px-6 pt-13`,
        { fontFamily: "OpenSans_400Regular" },
      ]}
    >
      <ScrollView
        style={[
          tw`mx-7 px-0.5 h-full max-w-md mx-auto w-full`,
          { fontFamily: "Open Sans" },
        ]}
      >
        <Search placeholder={"Search subjects or topics"} inputColor={"#F3F5F6"} />
      </ScrollView>
    </ScrollView>
  );
};

export default Header;
