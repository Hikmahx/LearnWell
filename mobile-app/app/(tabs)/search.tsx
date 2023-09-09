import { ScrollView, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Browse/Header";
import Subjects from "../../components/Browse/Subjects";
import tw from "../../lib/tailwind";

const Search = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <Header />
      <View style={tw`flex-1`}>
        <Subjects />
      </View>
    </View>
  );
};

export default Search;
