import React, { useEffect } from "react";
import { subjects } from "../../../subjects.json";
import { useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import tw from "../../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import Svg, { Path } from "react-native-svg";

const Topic = () => {
  const {topic} = useLocalSearchParams();

  useEffect(() => {
    console.log(topic);
  }, []);

  return (
    <View style={tw`w-full max-w-lg mx-auto`}>
      <View style={tw`mx-6 border-t border-[#b6b6b6]`}>
        <Text>Topic {topic}</Text>
      </View>
    </View>
  );
};

export default Topic;
