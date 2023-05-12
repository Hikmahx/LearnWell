import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import { Link } from "expo-router";
import Svg from "react-native-svg";

const FeaturedTopics = () => {
  return (
    <View>
      <View style={tw`flex-row mb-5 items-start`}>
        <Text style={tw`text-[28px] font-bold flex-1`}>Featured Topics</Text>
        <Link href="/subjects" style={tw`text-blue mt-2`}>
          See All
        </Link>
      </View>
      <View>
        <View
          style={[
            tw`p-4 rounded-[10px] bg-white flex-row items-center mb-4`,
            styles.shadow,
          ]}
        >
          <View style={tw`flex-1`}>
            <Text style={tw`uppercase text-xs mb-1`}>History</Text>
            <Text style={tw`font-bold text-lg mb-2`}>
              Ancient Civilizations
            </Text>
            <Text style={tw`text-gray`}>
              Learn about ancient civilizations like Egypt, Greece, and Rome
            </Text>
          </View>
          <View>
            <View
              style={tw`w-10 h-10 bg-blue rounded-2xl items-center justify-center`}
            >
              <Svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path
                  d="M1 5.99988H10.4286"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.28577 10.7142L12.0001 5.99993L7.28577 1.28564"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View
          style={[
            tw`p-4 rounded-[10px] bg-white flex-row items-center mb-4`,
            styles.shadow,
          ]}
        >
          <View style={tw`flex-1`}>
            <Text style={tw`uppercase text-xs mb-1`}>Biology</Text>
            <Text style={tw`font-bold text-lg mb-2`}>Mitosis And Meiosis</Text>
            <Text style={tw`text-gray`}>
              Learn about all the phases and importance of cell division &
              growth
            </Text>
          </View>
          <View>
            <View
              style={tw`w-10 h-10 bg-blue rounded-2xl items-center justify-center`}
            >
              <Svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path
                  d="M1 5.99988H10.4286"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.28577 10.7142L12.0001 5.99993L7.28577 1.28564"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View
          style={[
            tw`p-4 rounded-[10px] bg-white flex-row items-center mb-4`,
            styles.shadow,
          ]}
        >
          <View style={tw`flex-1`}>
            <Text style={tw`uppercase text-xs mb-1`}>Art</Text>
            <Text style={tw`font-bold text-lg mb-2`}>Drawing Fundamentals</Text>
            <Text style={tw`text-gray`}>
              Learn about basic drawing techniques
            </Text>
          </View>
          <View>
            <View
              style={tw`w-10 h-10 bg-blue rounded-2xl items-center justify-center`}
            >
              <Svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path
                  d="M1 5.99988H10.4286"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.28577 10.7142L12.0001 5.99993L7.28577 1.28564"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View
          style={[
            tw`p-4 rounded-[10px] bg-white flex-row items-center mb-4`,
            styles.shadow,
          ]}
        >
          <View style={tw`flex-1`}>
            <Text style={tw`uppercase text-xs mb-1`}>Computer Science</Text>
            <Text style={tw`font-bold text-lg mb-2`}>Programming Basics</Text>
            <Text style={tw`text-gray`}>Learn about programming basics </Text>
          </View>
          <View>
            <View
              style={tw`w-10 h-10 bg-blue rounded-2xl items-center justify-center`}
            >
              <Svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path
                  d="M1 5.99988H10.4286"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.28577 10.7142L12.0001 5.99993L7.28577 1.28564"
                  stroke="#FECF63"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgb(116, 116, 128)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 0,
    elevation: 5,
  },
});
export default FeaturedTopics;
