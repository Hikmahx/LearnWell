import { View, Text, Animated } from "react-native";
import React from "react";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import tw from "../../../../lib/tailwind";
import ProgressBar from "@/components/Quiz/ProgressBar";
import Options from "@/components/Quiz/Options";

const Questions = () => {
  return (
    <View style={[tw`bg-white`, { minHeight: "100%" }]}>
      <View>
        <View style={tw`relative bg-blue`}>
          <View style={tw`mt-10 mx-8`}>
            <ArrowLongLeftIcon style={tw`mb-8 text-white `} />
            <View style={tw`h-12 w-12 rounded-full bg-yellow mx-auto`}>
              <Text style={tw`text-dark-gray text-xl font-bold m-auto`}>8</Text>
            </View>
            <Text style={tw`mt-8 font-bold text-xl text-white`}>
              What is the result of 15 + 7 - 3?
            </Text>

            <View style={tw``}>
              <Text style={tw`text-md font-thin pt-8 pb-4 text-white`}>
                8/10
              </Text>
            </View>
          </View>
          <ProgressBar toValue={75} />
        </View>
        <View style={tw`px-8 w-full mx-auto mb-40 min-h-full mt-20 relative`}>
          <Options />
        </View>
      </View>
    </View>
  );
};

export default Questions;
