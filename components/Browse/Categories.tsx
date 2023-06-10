import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const categories = [
  "All",
  "Science",
  "Language",
  "Art",
  "Social Science",
  "History",
  "Technology",
  "Commerce",
  "Health",
];

const CategoryScrollView = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[tw`gap-x-3 my-5 h-auto`, styles.categoryContainer]}>
        {categories.map((category, index) => (
          <View key={index} style={[tw`py-1 px-3 rounded-full h-[24px]`, category === "All" ? tw`bg-black` : tw`bg-[#dadada] `]}>

            <Text style={[tw`text-xs`, category === "All" ? tw`text-white` : tw`text-black`]}>
              {category}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  }
});

export default CategoryScrollView;
