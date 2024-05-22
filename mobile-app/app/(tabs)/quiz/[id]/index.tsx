import React from "react";
import { subjects } from "../../../../subjects.json";
import { Link, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Pressable,
} from "react-native";
import tw from "../../../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import { ArrowRightIcon } from "react-native-heroicons/mini";
import Svg, { Path } from "react-native-svg";

const Quiz = () => {
  return (
    <View style={[tw`bg-white`, { minHeight: "100%" }]}>
      <View style={[tw`h-[180px] relative`, { backgroundColor: `blue` }]}>
        <View style={tw`mt-10 mx-8`}>
          <ArrowLongLeftIcon style={tw`mb-8 text-white `} />
          <Text style={tw`font-bold text-2xl text-white`}>Quiz</Text>
        </View>
      </View>
      <View style={tw`rounded-t-full bg-white h-[20px] -mt-[20px]`}></View>

      <View style={tw`px-7 max-w-lg w-full mx-auto mb-40 h-full mt-20`}>
        <View style={tw`mb-12`}>
          <Text style={tw`font-bold text-4xl mx-auto mb-3`}>10</Text>
          <Text style={tw`mb-4 font-bold text-4xl mx-auto`}>Questions</Text>
        </View>
        <Pressable
          style={tw`bg-yellow py-3 rounded-full w-full max-w-md mt-4`}
        >
          <Link
            style={tw`font-semibold text-lg text-black text-center mx-auto w-full flex flex-row items-center justify-center`}
            href="/quiz/122/questions"
          >
            <Text>Let's Go!</Text>
            <ArrowRightIcon style={tw`text-black font-bold ml-2`} />
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default Quiz;
