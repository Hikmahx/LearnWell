import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import QuizImage from "../../assets/images/quiz.svg";
import { ArrowLongRightIcon } from "react-native-heroicons/solid";
import { Link } from "expo-router";

const QuizBox = () => {
  return (
    <View
      style={[tw`bg-blue rounded-lg p-5 relative mt-0.5 w-full`, styles.shadow]}
    >
      <View>
        <QuizImage style={tw`absolute -top-1/3 right-2`} />
        <Text style={tw`text-white font-bold mb-1 max-w-32`}>
          Take a quiz to test your knowledge
        </Text>
        <View style={tw`flex flex-row items-end justify-between w-full`}>
          <Text style={tw`text-white mt-4 max-w-[280px]`}>
            Taking a quiz not only tests your understanding but also solidifies
            your learning, boosts confidence, and enhances retention.
          </Text>

          <Pressable style={tw`ml-8 `}>
            <ArrowLongRightIcon
              style={tw`mb-2 text-yellow font-bold text-xl`}
            />
            <Link href="/quiz/11" style={tw`absolute inset-0 z-10`}></Link>
          </Pressable>
        </View>
      </View>
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

export default QuizBox;
