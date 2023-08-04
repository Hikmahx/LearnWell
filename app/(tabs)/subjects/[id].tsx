import React from "react";
import { subjects } from "../../../subjects.json";
import { useSearchParams } from "expo-router";
import { ScrollView, View, Text, Image, ImageBackground } from "react-native";
import tw from "../../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";

interface SubjectData {
  id: number;
  subject: string;
  numberOfTopics: number;
  color: string;
  svgCode: any;
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
  // let icon = require(`${svgCode}`)

  return (
    <View style={[tw`bg-white`, { minHeight: "100%" }]}>
      <View style={[tw`h-[180px] relative`, { backgroundColor: `${color}` }]}>
      {/* <ImageBackground
        source={svgCode}
        style={[tw`h-[20px] w-[20px]`]}
      >
        </ImageBackground> */}
        <View style={tw`mt-10 mx-8`}>
          <ArrowLongLeftIcon style={tw`mb-8 text-white `} />
          <Text style={tw`font-bold text-2xl text-white`}>{subject}</Text>
        </View>
      </View>
      <View style={tw`rounded-t-full bg-white h-[20px] -mt-[20px]`}></View>
      {/* <SvgUri uri={svgCode} width={100} height={100} /> */}
      {/* <Image source={require(`${svgCode}`).default}  style={tw`w-20 h-20`}/> */}
      <Image source={{ uri: `${svgCode}` }} style={tw`w-20 h-20`} />

      <View style={tw`px-7 max-w-md w-full mx-auto`}>
        <Text style={tw`mt-2 font-bold text-xl`}>Topics</Text>
      </View>
    </View>
  );
};

export default Subject;
