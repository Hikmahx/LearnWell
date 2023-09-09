import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import { darkenColor } from "../../utils/colorUtils";

interface NoteWrapperProps {
  noteColor: string;
  title: string;
  summary: string;
  category: string;
  subject: string;
  date: string;
}

const NoteWrapper = ({
  noteColor,
  title,
  summary,
  category,
  subject,
  date,
}: NoteWrapperProps) => {
  return (
    <View
      style={[
        tw`p-[10px] rounded-[6px] mb-4 bg-[${noteColor}] bg-opacity-20`,
        // { backgroundColor: `${noteColor}` },
      ]}
    >
      <Text style={tw`mb-3 font-bold text-lg text-[${darkenColor(noteColor, 180)}]`}>{title}</Text>
      <Text style={tw`mb-2 text-[10px] text-dark-gray`}>{summary}</Text>
      <View style={tw`flex-row items-center justify-between mt-3`}>
        <View style={tw`flex-row items-center text-dark-gray`}>
          <Text style={tw`text-[10px] text-dark-gray`}>{category}</Text>
          <Text style={tw` text-dark-gray`}> | </Text>
          <Text style={tw`text-[10px] text-dark-gray`}>{subject}</Text>
        </View>
        <Text style={tw`text-[10px] text-dark-gray`}>{date}</Text>
      </View>
    </View>
  );
};

export default NoteWrapper;
