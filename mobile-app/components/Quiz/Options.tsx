import { ScrollView, View, Text, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "../../lib/tailwind";
import { XCircleIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCurrentQuestionIndex, setScore, setSelectedOption, setShowAnswer } from "../../redux/reducers/quizSlice";

const Options = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, score, quizQuestions, showAnswer, selectedOption } = useSelector(
    (state: RootState) => state.quiz
  );
  const [quizOptions, setQuizOptions] = useState<string[]>([]);

  useEffect(() => {
    if (quizQuestions.length > 0 && currentQuestionIndex >= 0 && currentQuestionIndex < quizQuestions[0].questions.length) {
      const questionOptions = quizQuestions[0].questions[currentQuestionIndex].options;
      setQuizOptions(questionOptions);
    }
  }, [currentQuestionIndex, quizQuestions]);

  const handleOptionPress = (index: number) => {
    dispatch(setSelectedOption(index));

    // Check if the selected option is correct
    if (isCorrectAnswer(index)) {
      dispatch(setScore(score + 1));
    }
  };

  const isCorrectAnswer = (index: number) => {
    if (quizQuestions.length > 0 && currentQuestionIndex >= 0 && currentQuestionIndex < quizQuestions[0].questions.length) {
      return quizOptions[index] === quizQuestions[0].questions[currentQuestionIndex].answer;
    }
    return false;
  };

  return (
    <>
      {quizOptions.map((option, index) => (
        <Pressable
          key={index}
          style={[
            tw`flex flex-row items-center gap-3 mb-4 px-4 py-2 rounded-2 border-2 ${
              // If the show answer button is not yet pressed
              !showAnswer
                ? //   Change the border color to blue when selected
                  selectedOption === index
                  ? "border-blue"
                  : "border-transparent"
                : // Else if the show answer button is pressed and the answer correct
                isCorrectAnswer(index)
                ? "border-[#3EA941]"
                : // Else if it is the selected option, the show answer button is pressed and the answer incorrect
                selectedOption === index
                ? "border-red-500"
                : "border-transparent"
            }`,
          ]}
          onPress={() => !showAnswer && handleOptionPress(index)}
        >
          <View
            style={[
              tw`w-2 h-2 p-3 rounded-full flex items-center justify-center ${
                // Same as the first comments
                !showAnswer
                  ? selectedOption === index
                    ? "bg-blue"
                    : "bg-[#dfdfdf]"
                  : isCorrectAnswer(index)
                  ? "bg-[#3EA941]"
                  : selectedOption === index
                  ? "bg-red-500"
                  : "bg-[#dfdfdf]"
              }`,
              showAnswer && isCorrectAnswer(index) && tw`bg-green-500`,
            ]}
          >
            <View
              style={tw`w-1 h-1 p-2.5 rounded-full bg-white flex items-center justify-center bg-white`}
            >
              <View
              //     style={tw`w-1 h-1 p-2 rounded-full ${
              //       // Same as the first comments
              //       !showAnswer
              //         ? selectedOption === index
              //           ? "bg-blue"
              //           : "bg-transparent"
              //         : isCorrectAnswer(index)
              //         ? "bg-[#3EA941]"
              //         : selectedOption === index
              //         ? "bg-red-500"
              //         : "bg-transparent"
              //     }
              //   `}
              >
                {
                  // Same as the first comments
                  !showAnswer ? null : isCorrectAnswer(index) ? (
                    <CheckCircleIcon
                      style={tw`w-5 h-5 text-[#3ea941] text-lg`}
                    />
                  ) : selectedOption === index ? (
                    <XCircleIcon style={tw`w-5 h-5 text-red-500 text-lg`} />
                  ) : null
                }
              </View>
            </View>
          </View>
          <Text>{option}</Text>
        </Pressable>
      ))}

    </>
  );
};

export default Options;
