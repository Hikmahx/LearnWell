import React from "react";
import { subjects } from "../../../subjects.json";
import { useSearchParams } from "expo-router";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import tw from "../../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import Svg, { Path } from "react-native-svg";

interface SubjectData {
  id: number;
  subject: string;
  numberOfTopics: number;
  color: string;
  svgCode: any;
}
const Topic = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View
      key={item.subject}
      style={tw`flex flex-row items-center border-b border-[#b6b6b6] py-3.5`}
    >
      <View style={tw`flex flex-row w-full`}>
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold mb-2`}>{item.subject}</Text>
          <Text style={tw`text-[10px] text-[#7e7e7e] overflow-wrap`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel
            adipisci optio
          </Text>
        </View>
        <View>
          <View
            style={tw`w-10 h-10 bg-blue rounded-full items-center justify-center ml-2`}
          >
            <Svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              style={tw`ml-1`}
            >
              <Path
                d="M1.56699 0.15631C1.41199 0.0590289 1.23389 0.00518176 1.05118 0.000355621C0.868463 -0.00447052 0.687794 0.0399005 0.527913 0.128864C0.368032 0.217828 0.234764 0.348144 0.141937 0.50629C0.0491098 0.664437 0.000106142 0.844652 9.3976e-06 1.02824V14.0802C-0.00077587 14.2642 0.0476653 14.445 0.140266 14.6037C0.232866 14.7624 0.366222 14.8931 0.526385 14.9823C0.686549 15.0715 0.867634 15.1159 1.0507 15.1107C1.23376 15.1055 1.41208 15.051 1.56699 14.9529L11.9633 8.42732C12.1105 8.33473 12.2319 8.20607 12.3161 8.05342C12.4003 7.90076 12.4444 7.72912 12.4444 7.55462C12.4444 7.38012 12.4003 7.20848 12.3161 7.05582C12.2319 6.90317 12.1105 6.77451 11.9633 6.68192L1.56699 0.15631Z"
                fill="#FECF63"
              />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`w-full max-w-lg mx-auto`}>
      <View style={tw`mx-6 border-t border-[#b6b6b6]`}>
        <FlatList
          data={subjects}
          renderItem={renderItem}
          keyExtractor={(item) => item.subject}
        />
      </View>
    </View>
  );
};

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
        <View style={tw`mt-10 mx-8`}>
          <ArrowLongLeftIcon style={tw`mb-8 text-white `} />
          <Text style={tw`font-bold text-2xl text-white`}>{subject}</Text>
        </View>
      </View>
      <View style={tw`rounded-t-full bg-white h-[20px] -mt-[20px]`}></View>
      <Image source={{ uri: `${svgCode}` }} style={tw`w-20 h-20`} />

      <View style={tw`px-7 max-w-md w-full mx-auto`}>
        <Text style={tw`mt-2 font-bold text-xl`}>Topics</Text>
      </View>
      <Topic />
    </View>
  );
};

export default Subject;
