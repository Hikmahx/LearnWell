import React from "react";
import { Stack } from "expo-router";

const QuizIdLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
        name="index" 
        options={{ headerShown: false }}
         />
        <Stack.Screen 
          name="questions" 
          options={{ headerShown: false }}
           />
        <Stack.Screen
          name="quiz-completion"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default QuizIdLayout;
