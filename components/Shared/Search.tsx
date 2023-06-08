import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchIcon from "../../assets/images/search.svg";
import tw from "../../lib/tailwind";

interface SearchProps {
  placeholder: string;
  inputColor: string;
}

const Search = ({ placeholder, inputColor }: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text: string) => {
    // Handle search functionality here
    setSearchText(text);
  };

  return (
    <View style={tw``}>
      <View style={[tw`flex-row items-center p-4`, styles.container, { backgroundColor: inputColor }]}>
        <TextInput
          style={[tw`focus:outline-none`, styles.input]}
          placeholder={placeholder}
          placeholderTextColor="#7E7E7E"
          value={searchText}
          onChangeText={handleSearch}
        />
        <SearchIcon color="#aaa" style={styles.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // alignItems: "center",
    // paddingHorizontal: 16,
    // paddingVertical: 16,
    borderRadius: 18,
    // marginBottom: 12,
    fontFamily: "OpenSans_400Regular",
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 6 },
    // shadowOpacity: 0.4,
    // shadowRadius: 20,
    // elevation: 6
    // box-shadow: 0px 6px 20px 0px #00000040;
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    outlineStyle: "none",
  },
});

export default Search;
