import React, { useState } from "react";
import { View, Pressable } from "react-native";
import {
  ArrowLeftIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/solid";
import {
  MenuProvider,
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import tw from "../../../lib/tailwind";
import { Link, useNavigation, useRouter } from "expo-router";
import PellRichEditor from "../../../components/MyNotes/new-note/PellRichEditor";

const NewNote = () => {
  const router = useRouter();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuSelect = (value: any) => {
    console.log(value);
    setIsMenuVisible(false);
  };

  return (
    <MenuProvider>
      <View style={tw`bg-[#fef3f2] h-full pt-12 px-4`}>
        <View style={tw`flex-row items-center justify-between mb-6`}>
          <Pressable style={tw``} onPress={() => router.push("/mynotes")}>
            <ArrowLeftIcon style={tw`mb-2 text-black font-bold`} />
          </Pressable>
          <Pressable onPress={toggleMenu}>
            <EllipsisVerticalIcon style={tw`mb-2 text-black font-bold`} />
          </Pressable>
        </View>
        <Menu
          style={{
            position: "absolute",
            top: 80,
            right: 24,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            elevation: 3,
            zIndex: 1,
          }}
          opened={isMenuVisible}
          onBackdropPress={toggleMenu}
        >
          <MenuTrigger />
          <MenuOptions style={tw`px-1 py-3`}>
            <MenuOption
              onSelect={() => handleMenuSelect("change-bg")}
              text="Change Background Color"
            />
            <MenuOption
              onSelect={() => handleMenuSelect("save-note")}
              text="Save Note"
            />
          </MenuOptions>
        </Menu>
        <PellRichEditor />
      </View>
    </MenuProvider>
  );
};

export default NewNote;
