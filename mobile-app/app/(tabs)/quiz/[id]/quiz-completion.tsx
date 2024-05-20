import React from "react";
import { View, Text, Animated, Pressable, ScrollView } from "react-native";
import tw from "../../../../lib/tailwind";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Trophy from "../../../../assets/images/trophy.svg";
import { useRouter } from "expo-router";

const QuizCompletion = () => {
  const dispatch = useDispatch();
  const { score, quizQuestions } = useSelector(
    (state: RootState) => state.quiz
  );
  const router = useRouter();
  
  return (
    <View style={tw`bg-blue w-full h-full`}>
      <View style={tw`m-auto`}>
        <Trophy style={tw`mx-auto mt-16`} />
        <Text style={tw`text-white font-bold mx-auto my-10`}>
          {score > 5 && "Congratulations, "}You Have Completed This Quiz!
        </Text>
        <Text style={tw`text-white tracking-widest text-2xl font-thin mx-auto`}>
          YOUR SCORE
        </Text>
        <View style={tw`flex flex-row items-center justify-center my-6`}>
          <Text
            style={tw`font-bold text-5xl ${
              score > 5 ? "text-[#3EA941]" : "text-red-500"
            }`}
          >
            {score}
          </Text>
          <Text style={tw`text-white font-bold text-5xl`}>/10</Text>
        </View>
        <View style={tw`flex-row justify-between mt-5 gap-6`}>
          <Pressable
            onPress={() => router.replace("/")}
            style={tw`bg-gray rounded-2 px-4 py-2`}
          >
            <Text style={tw`text-white text-xl`}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => router.replace("/")}
            style={tw`bg-yellow rounded-2 px-4 py-2`}
          >
            <Text style={tw`text-dark-gray text-xl`}>Learn More</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default QuizCompletion;
