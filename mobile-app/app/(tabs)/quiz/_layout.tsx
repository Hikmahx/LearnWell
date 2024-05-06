import React from "react";
import { Stack } from "expo-router";

const QuizLayout = () => {
  return (
    <>
      <Stack>
        {/* <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default QuizLayout;
