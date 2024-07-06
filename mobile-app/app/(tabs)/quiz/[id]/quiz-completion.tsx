import React, { useEffect, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../../lib/tailwind";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Trophy from "../../../../assets/images/trophy.svg";
import { useRouter } from "expo-router";
import { setScore } from "../../../../redux/reducers/quizSlice";
import ConfettiCannon from "react-native-confetti-cannon";

const QuizCompletion = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state: RootState) => state.quiz);
  const router = useRouter();
  const confettiRef = useRef(null);

  useEffect(() => {
    dispatch(setScore(6));

    // Trigger confetti on load
    setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current.start();
      }
    }, 500); // Delay to ensure the component has mounted
  }, []);

  console.log("Score:", score);

  return (
    <View style={tw`bg-blue w-full h-full`}>
      <View style={tw`m-auto`}>
        <Trophy style={tw`mx-auto mt-16`} />
        <Text style={tw`text-white font-bold mx-auto my-10`}>
          {score > 5 ? "Congratulations, " : ""}You Have Completed This Quiz!
        </Text>
        <Text style={tw`text-white tracking-widest text-2xl font-thin mx-auto`}>
          YOUR SCORE
        </Text>
        <View style={tw`flex flex-row items-center justify-center my-6`}>
          <Text
            style={tw.style(`font-bold text-5xl`, {
              color: score > 5 ? "#3EA941" : "red",
            })}
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
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{ x: 0, y: 0 }}
        fadeOut={true}
        autoStart={false} // Disable auto start so we can control it manually
      />
    </View>
  );
};

export default QuizCompletion;
