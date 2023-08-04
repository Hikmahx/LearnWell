import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import { subjects } from "../../subjects.json";
import Svg, { Image } from "react-native-svg";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { Link } from "expo-router";

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
        <View style={[tw`text-${item.color}`, styles.imageContainer]}>
          <Svg width={20} height={20}>
            <Image
              href={item.svgCode}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </Svg>
          {/* <Image source={require(item.svgCode)}/> */}
          {/* <Image source={item.svgCode}/> */}
        </View>
      </View>
      <View style={tw`flex ml-3`}>
        <Text style={tw`font-bold mb-2`}>{item.subject}</Text>
        <Text style={tw`text-[10px] text-[#7e7e7e]`}>
          {item.numberOfTopics} Topics
        </Text>
      </View>
      <Link
        // href={`subjects/${item.subject.toLowerCase().replace(" ", "-")}`}
        href={`subjects/${item.id}`}
        style={tw`ml-auto`}
      >
        {/* <Text style={tw`sr-only hidden`}>Link to subject</Text> */}
        <ChevronRightIcon style={tw`text-[#7e7e7e]`} />
      </Link>
    </View>
  );

  return (
    <View style={tw`w-full max-w-lg mx-auto`}>
      <View style={tw`mx-6 border-t border-[#b6b6b6]`}>
        <FlatList
          // style={tw`pb-10`}
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
