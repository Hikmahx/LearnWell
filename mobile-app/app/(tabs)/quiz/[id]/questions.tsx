import { View, Text, Animated, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import tw from "../../../../lib/tailwind";
import ProgressBar from "../../../../components/Quiz/ProgressBar";
import Options from "../../../../components/Quiz/Options";
import { quizzes } from "../../../../quiz.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setCurrentQuestionIndex,
  setQuizQuestions,
  setScore,
  setShowAnswer,
  setSelectedOption,
} from "../../../../redux/reducers/quizSlice";
import { useRouter } from 'expo-router';

const Questions = () => {
  const dispatch = useDispatch();
  const {
    currentQuestionIndex,
    score,
    selectedOption,
    quizQuestions,
    showAnswer,
  } = useSelector((state: RootState) => state.quiz);
  const [btnText, setBtnText] = useState("Show Answer");
  const router = useRouter();

  useEffect(() => {
    dispatch(setQuizQuestions(quizzes));
    dispatch(setCurrentQuestionIndex(0));
  }, []);

  // const handleAnswerOptionClick = (answer) => {
  //   const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  //   if (answer === correctAnswer) {
  //     dispatch(setScore(score + 1));
  //   }
  //   const nextQuestion = currentQuestionIndex + 1;
  //   if (nextQuestion < questions.length) {
  //     dispatch(setCurrentQuestionIndex(nextQuestion));
  //   } else {
  //     alert(`Quiz finished! You scored ${score} out of ${questions.length}`);
  //   }
  // };

  const handleAnswer = () => {
    if (btnText == "Show Answer") {
      if (selectedOption !== null) {
        dispatch(setShowAnswer(true));
        setBtnText("Next Question");
      }
    } else {
      dispatch(setShowAnswer(false));
      dispatch(setSelectedOption(null));
      setBtnText("Show Answer");

      // CHECK IF THIS IS THE LAST QUESTION
      if (currentQuestionIndex < quizQuestions[0].questions.length - 1) {
        dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      } else {
        router.replace('/quiz/122/quiz-completion');

      }
    }
  };

  return (
    <View style={[tw`bg-white`, { minHeight: "100%" }]}>
      {quizQuestions.length > 0 ? (
        <View>
          <View style={tw`relative bg-blue`}>
            <View style={tw`mt-10 mx-8`}>
              <ArrowLongLeftIcon style={tw`mb-8 text-white `} />
              <View style={tw`h-12 w-12 rounded-full bg-yellow mx-auto`}>
                <Text style={tw`text-dark-gray text-xl font-bold m-auto`}>
                  {currentQuestionIndex + 1}
                </Text>
              </View>
              <Text style={tw`mt-8 font-bold text-xl text-white`}>
                {quizQuestions[0].questions[currentQuestionIndex].question}
              </Text>

              <View style={tw``}>
                <Text style={tw`text-md font-thin pt-8 pb-4 text-white`}>
                  {currentQuestionIndex + 1}/10
                </Text>
              </View>
            </View>
            <ProgressBar toValue={((currentQuestionIndex + 1) / 10) * 100} />
          </View>
          <View style={tw`px-8 w-full mx-auto mb-40 min-h-full mt-20 relative`}>
            <ScrollView>
              <Options />
              <Pressable
                style={tw`mt-4 px-6 py-3 w-full max-w-lg rounded-md mb-6 ${
                  selectedOption === null ? "bg-gray" : "bg-blue"
                }`}
                onPress={() => handleAnswer()}
              >
                <Text style={tw`mx-auto text-white`}>{btnText}</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      ) : (
        <View style={tw`flex-row justify-center items-center`}>
          <Text style={tw`text-white`}>No Quiz Questions</Text>
        </View>
      )}
    </View>
  );
};

export default Questions;
