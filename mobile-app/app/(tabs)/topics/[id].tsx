import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import HTMLView from "react-native-htmlview";
import topicFile from "../../../topic.json";
import tw from "../../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import Svg, { Path } from "react-native-svg";
import QuizBox from "../../../components/Topics/QuizBox";

const Topic = () => {
  interface TopicData {
    title: string;
    tags: string[];
    article: string;
  }

  const { topic } = useLocalSearchParams();
  const [topicData, setTopicData] = useState<TopicData | null>(null);

  useEffect(() => {
    setTopicData(topicFile as any);
  }, [topicFile]);

  return (
    <ScrollView style={tw`w-full bg-white`}>
      {topicData ? (
        <>
          <View style={tw`bg-black h-80`}></View>
          <View style={tw`max-w-lg mx-auto mt-12 mb-20 mx-6`}>
            <View style={tw`flex flex-row flex-wrap items-center mb-6`}>
              {topicData.tags.map((tag, index) => (
                <>
                  <Text
                    key={index}
                    style={[
                      tw`text-gray py-1  text-sm capitalize`,
                      index !== 0 && tw`ml-1`,
                    ]}
                  >
                    {tag}
                  </Text>
                  <Text style={tw`mx-4 font-bold`}>
                    {index !== topicData.tags.length - 1 && " | "}
                  </Text>
                </>
              ))}
            </View>
            <View style={tw`mb-20`}>
              <Text style={tw`text-black text-2xl font-bold mb-4`}>
                {topicData.title}
              </Text>
              <HTMLView
                value={topicData.article}
                stylesheet={{
                  h1: { color: "black", fontSize: 20, marginBottom: 10 },
                  h2: { color: "black", fontSize: 18, marginBottom: 8 },
                  h3: { color: "black", fontSize: 16, marginBottom: 2 },
                  p: { color: "darkgray", fontSize: 14 },
                }}
              />
            </View>
            <QuizBox />
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default Topic;
