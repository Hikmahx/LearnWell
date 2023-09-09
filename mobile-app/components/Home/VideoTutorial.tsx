import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import VTImage from "../../assets/images/video-tutorial.svg";

const VideoTutorial = () => {
  return (
    <View>
      <View style={[tw`bg-blue rounded-lg p-5 relative mt-0.5`, styles.shadow]}>
        <VTImage style={tw`absolute -top-1/3 right-2`} />
        <Text style={tw`text-white font-bold mb-1`}>Video Tutorial</Text>
        <Text style={tw`text-white mt-4 max-w-[200px]`}>
          Watch the video tutorial in the lesson for easier understanding of the
          chosen topic.
        </Text>
      </View>
      <View style={tw`border-b flex-1 w-full border-zinc-200 my-4`} />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
});

export default VideoTutorial;
