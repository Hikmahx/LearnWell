import { ScrollView, Text } from "react-native";
import React from "react";
import Header from "../../components/Browse/Header";
import Subjects from "../../components/Browse/Subjects";
import tw from "../../lib/tailwind";

const Search = () => {
  return (
    <ScrollView style={tw`bg-white`}>
      <Header />
      <Subjects />
    </ScrollView>
  );
};

export default Search;
