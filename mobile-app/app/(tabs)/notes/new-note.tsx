import React, { useEffect, useState } from "react";
import { BackHandler, View, Pressable, Modal } from "react-native";
import {
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setArticleContent,
  setColor,
  setEditorState,
  setIsColorPickerVisible,
} from "../../../redux/reducers/notesSlice";
import ConfirmationModal from "../../../components/MyNotes/new-note/ConfirmationModal";

const NewNote = () => {
  const router = useRouter();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const dispatch = useDispatch();
  const { isColorPickerVisible, color } = useSelector(
    (state: RootState) => state.notes
  );

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuSelect = (value: any) => {
    console.log(value);
    if (value === "change-bg") {
      dispatch(setIsColorPickerVisible(true));
    } else if (value === "save-note") {
      // Save note functionality here
    }
    setIsMenuVisible(false);
  };

  const onColorChange = (selectedColor: string) => {
    dispatch(setColor(selectedColor));
    // dispatch(setIsColorPickerVisible(false));
  };

  // Trigger 'goBack' fxn on backhandler
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        goBack();
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleConfirmCancel = (confirmed: boolean) => {
    if (confirmed) {
      router.push("/mynotes");
      dispatch(setArticleContent(""));
      dispatch(setColor("white"));
      dispatch(setEditorState("cancelled"));
    }
    setIsModalVisible(false);
  };

  const goBack = () => {
    toggleModal();
  };

  return (
    <MenuProvider>
      <View
        style={[tw`bg-[#fef3f2] h-full pt-12 px-4`, { backgroundColor: color }]}
      >
        <View style={tw`flex-row items-center justify-between mb-6`}>
          <Pressable onPress={goBack}>
            <ArrowLeftIcon style={tw`mb-2 text-black font-bold`} />
          </Pressable>
          {isModalVisible && (
            <ConfirmationModal
              visible={isModalVisible}
              onCancel={() => handleConfirmCancel(false)}
              onConfirm={() => handleConfirmCancel(true)}
            />
          )}
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
        onRequestClose={() => dispatch(setIsColorPickerVisible(false))}
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
              height: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: "white",
              margin: "auto",
              // elevation: 5,
            }}
          >
            <Pressable
              onPress={() => dispatch(setIsColorPickerVisible(false))}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <XMarkIcon />
            </Pressable>
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
                style={{ width: 200, height: 200, paddingBottom: 40 }}
                swatches={true}
              />
              {/* <Text style={{ marginTop: 20 }}>Selected Color: {color}</Text> */}
            </View>
          </View>
        </View>
      </Modal>
    </MenuProvider>
  );
};

export default NewNote;
