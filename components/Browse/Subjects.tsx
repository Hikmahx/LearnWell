import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import { subjects } from "../../subjects.json";
import Svg, { Image } from "react-native-svg";
import { ChevronRightIcon } from "react-native-heroicons/solid";

const Subjects = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View
      key={item.subject}
      style={tw`flex flex-row items-center border-b border-[#b6b6b6] py-3.5`}
    >
      <View
        style={[
          tw`w-8 h-8 flex rounded-lg`,
          styles.container,
          { backgroundColor: `${item.color}80` },
        ]}
      >
        <View style={styles.imageContainer}>
          <Svg width={20} height={20}>
            <Image
              href={item.svgCode}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </Svg>
        </View>
      </View>
      <View style={tw`flex ml-3`}>
        <Text style={tw`font-bold mb-2`}>{item.subject}</Text>
        <Text style={tw`text-[10px] text-[#7e7e7e]`}>
          {item.numberOfTopics} Topics
        </Text>
      </View>
      <ChevronRightIcon style={tw`ml-auto`} />
    </View>
  );

  return (
    <View style={tw`w-full max-w-lg mx-auto mb-10`}>
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

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Subjects;
