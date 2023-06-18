import React from "react";
import { subjects } from "../../../subjects.json";
import { useSearchParams } from "expo-router";
import { ScrollView, View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";

interface SubjectData {
  id: number;
  subject: string;
  numberOfTopics: number;
  color: string;
  svgCode: string;
}

const Subject: React.FC = () => {
  const { id } = useSearchParams();
  const subjectData: SubjectData | undefined = subjects.find(
    (subject) => subject.id === parseInt(id as string)
  );

  if (!subjectData) {
    return (
      <View style={[tw`bg-white`, { minHeight: "100%" }]}>
        <Text>Subject not found</Text>
      </View>
    );
  }

  const { subject, numberOfTopics, color, svgCode } = subjectData;

  // return (
  //   <View style={[tw`bg-white`, { minHeight: "100%" }]}>
  //     <Text>Subject Details #{id}</Text>
  //     <Text>Subject: {subject}</Text>
  //     <Text>Number of Topics: {numberOfTopics}</Text>
  //     <Text>Color: {color}</Text>
  //     <Text>SVG Code: {svgCode}</Text>
  //   </View>
  // );

  return (
    <View style={[tw`bg-white`, { minHeight: "100%" }]}>
      <View style={[tw`h-[180px]`, { backgroundColor: `${color}` }]}>
        <View style={tw`mt-10 text-white mx-8`}>
          <ArrowLongLeftIcon style={tw`mb-8`} />
          <Text style={tw`font-bold text-2xl text-white`}>{subject}</Text>
        </View>
      </View>
        <View style={tw`rounded-t-full bg-white h-[20px] -mt-[20px]`}></View>
    </View>
  );
};

export default Subject;
