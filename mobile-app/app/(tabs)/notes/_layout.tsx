import React from "react";
import { Stack } from "expo-router";

const NotesLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="[id]"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="new-note"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default NotesLayout;
