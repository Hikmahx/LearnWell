import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import QuizImage from "../../assets/images/quiz.svg";
import { ArrowLongRightIcon } from "react-native-heroicons/solid";
import { Link } from "expo-router";

const QuizBox = () => {
  return (
    <Link href="/home" style={tw`w-full h-fix`}>
      <View style={[tw`bg-blue rounded-lg p-5 relative mt-0.5 w-full`, styles.shadow]}>
        <QuizImage style={tw`absolute -top-1/4 right-2`} />
        <View style={tw`flex flex-row items-end justify-between w-full`}>
          <View>
            <Text style={tw`text-white font-bold mb-1 max-w-32`}>
              Take a quiz to test your knowledge
            </Text>
            <Text style={tw`text-white mt-4 max-w-[280px]`}>
              Taking a quiz not only tests your understanding but also
              solidifies your learning, boosts confidence, and enhances
              retention.
            </Text>
          </View>
          <Pressable style={tw`ml-8 `}>
            <ArrowLongRightIcon style={tw`mb-2 text-yellow font-bold text-xl`} />
          </Pressable>
        </View>
      </View>
    </Link>
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
