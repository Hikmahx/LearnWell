import { View, Text, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "../../lib/tailwind";
import { quizzes } from "@/quiz.json";
import { XCircleIcon, CheckCircleIcon } from "react-native-heroicons/solid";

const Options = () => {
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const questionOptions = quizzes[0].questions[1].options;
    setQuizOptions(questionOptions);
  }, []);

  const handleOptionPress = (index: number) => {
    setSelectedOption(index);
  };

  const isCorrectAnswer = (index: number) => {
    return quizOptions[index] === quizzes[0].questions[1].answer;
  };

  return (
    <View>
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
          onPress={() => handleOptionPress(index)}
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
      <Button title="Show Answer" onPress={() => setShowAnswer(true)} />
    </View>
  );
};

export default Options;
