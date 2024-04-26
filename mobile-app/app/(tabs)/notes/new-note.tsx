import React, { useState } from "react";
import { View, Pressable, Modal, Text, Button } from "react-native";
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
import ColorPicker from "react-native-wheel-color-picker";

const NewNote = () => {
  const router = useRouter();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuSelect = (value: any) => {
    console.log(value);
    if (value === "change-bg") {
      setIsColorPickerVisible(true);
    } else if (value === "save-note") {
      // Save note functionality here
    }
    setIsMenuVisible(false);
  };

  const onColorChange = (selectedColor: string) => {
    setColor(selectedColor);
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
      {/* Color Picker Modal */}
      <Modal
        visible={isColorPickerVisible}
        transparent={true}
        onRequestClose={() => setIsColorPickerVisible(false)}
        style={tw`w-full flex items-center justify-center`}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: "white",
              margin: "auto",
            }}
          >
            <Button
              title="Close"
              onPress={() => setIsColorPickerVisible(false)}
            />

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ColorPicker
                color={color}
                onColorChange={onColorChange}
                style={{ width: 200, height: 200 }}
                swatches={true}
              />
              <Text style={{ marginTop: 20 }}>Selected Color: {color}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </MenuProvider>
  );
};

export default NewNote;
