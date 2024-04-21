import { ScrollView, View, Text, Pressable } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import NoteTaking from "../../assets/images/note-taking.svg";
import Search from "../../components/Shared/Search";
import Notes from "../../components/MyNotes/Notes";
import { Link } from "expo-router";

const MyNotes = () => {
  return (
    <>
      <ScrollView
        style={[
          tw`bg-[#fafafa] w-full h-full px-6 pt-13`,
          { fontFamily: "OpenSans_400Regular" },
        ]}
      >
        <ScrollView
          style={[tw`mx-7 px-0.5 h-full max-w-md mx-auto mb-4 w-full`]}
        >
          <View style={tw`w-full mr-auto flex-row mb-2`}>
            <Text style={tw`text-left font-bold text-3xl w-24`}>My Notes</Text>
            <NoteTaking />
          </View>
          <Search placeholder={"Search your notes"} inputColor={"#FECF63CC"} />
          <Notes />
        </ScrollView>
      </ScrollView>
      <Link href="/notes/new-note" asChild>
        <Pressable
          style={tw`h-12 w-12 p-2 bg-black rounded-full absolute bottom-8 left-8 shadow-lg flex items-center justify-center`}
        >
          <Text style={tw`font-bold text-xl text-white`}>+</Text>
        </Pressable>
      </Link>
    </>
  );
};

export default MyNotes;
