import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import VideoTutorial from "../components/Home/VideoTutorial";
import PopularSubjects from "../components/Home/PopularSubjects";
import FeaturedTopics from "../components/Home/FeaturedTopics";
import tw from "../lib/tailwind";

const Home = () => {
  return (
    <ScrollView style={[tw`bg-[#fafafa] w-full h-full pt-13 pb-20`, { fontFamily: 'OpenSans_400Regular' }]}>
      <View style={tw`mx-7 px-0.5 h-full max-w-md mx-auto`}>
        <Header />
        <VideoTutorial />
        <PopularSubjects />
        <FeaturedTopics />
      </View>
    </ScrollView>
  );
};

export default Home;
