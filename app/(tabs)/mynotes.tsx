import { ScrollView, View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import NoteTaking from "../../assets/images/note-taking.svg";
import Search from "../../components/MyNotes/Search";
import Notes from "../../components/MyNotes/Notes";

const MyNotes = () => {
  return (
    <ScrollView
      style={[
        tw`bg-[#fafafa] w-full h-full px-6 pt-13`,
        { fontFamily: "OpenSans_400Regular" },
      ]}
    >
      <ScrollView
        style={[
          tw`mx-7 px-0.5 h-full max-w-md mx-auto mb-4 w-full`,
          { fontFamily: "Open Sans" },
        ]}
      >
        <View style={tw`w-full mr-auto flex-row mb-2`}>
          <Text style={tw`text-left font-bold text-3xl w-24`}>My Notes</Text>
          <NoteTaking />
        </View>
        <Search />
        <Notes />
      </ScrollView>
    </ScrollView>
  );
};

export default MyNotes;
