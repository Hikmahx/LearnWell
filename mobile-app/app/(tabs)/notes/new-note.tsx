import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "../../../lib/tailwind";
import {
  ArrowLeftIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/solid";
import { Link, useNavigation, useRouter } from "expo-router";
import PellRichEditor from "@/components/MyNotes/new-note/PellRichEditor";

const NewNote = () => {
  const router = useRouter();

  return (
    <View style={tw`bg-[#fef3f2] h-full pt-12 px-4`}>
      <View style={tw`flex-row items-center justify-between mb-6`}>
        <Pressable style={tw``} onPress={() => router.push("/mynotes")}>
          <ArrowLeftIcon style={tw`mb-2 text-black font-bold`} />
        </Pressable>
        <Pressable>
          <EllipsisVerticalIcon style={tw`mb-2 text-black font-bold`} />
        </Pressable>
      </View>
      <PellRichEditor />
    </View>
  );
};

export default NewNote;
