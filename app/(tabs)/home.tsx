import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import VideoTutorial from "../../components/Home/VideoTutorial";
import PopularSubjects from "../../components/Home/PopularSubjects";
import FeaturedTopics from "../../components/Home/FeaturedTopics";
import tw from "../../lib/tailwind";

const Home = () => {
  return (
    <ScrollView style={[tw`bg-white w-full h-full px-6 pt-13`, { fontFamily: 'OpenSans_400Regular' }]}>
      <ScrollView style={tw`mx-7 px-0.5 h-full max-w-md mx-auto mb-20`}> 
        <Header />
        <VideoTutorial />
        <PopularSubjects />
        <FeaturedTopics />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
