import React from "react";
import { subjects } from "../../../subjects.json";
import { useSearchParams } from "expo-router";
import { ScrollView, View, Text } from "react-native";

const Subject = () => {
  const { id } = useSearchParams();
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Subject Details #{id} </Text>
    </ScrollView>
  );
};

export default Subject;
