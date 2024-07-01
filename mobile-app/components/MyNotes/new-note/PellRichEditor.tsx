import React, { useEffect } from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import tw from "../../../lib/tailwind";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setArticleContent, setEditorState } from "../../../redux/reducers/notesSlice";

const handleHead = ({ tintColor }) => (
  <Text style={{ color: tintColor }}>H1</Text>
);

const PellRichEditor = () => {
  const richText = React.useRef();

  const dispatch = useDispatch();
  const { color, articleContent, editorState } = useSelector(
    (state: RootState) => state.notes
  );

  useEffect(() => {
    dispatch(setEditorState("editing"));

    if (editorState === "cancelled") {
      richText.current?.setContentHTML("");
    }
  }, [editorState]);

  const handleContentChange = (content: string) => {
    dispatch(setArticleContent(content));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <RichEditor
              lastFocusEnd={true}
              editorStyle={{ backgroundColor: color }}
              autoCorrect={true}
              placeholder="Write your note here"
              ref={richText}
              onChange={handleContentChange}
              pasteAsPlainText={true}
              initialHeight={250}
              initialContentHTML={""}
            />
          </View>
        </ScrollView>

        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
            actions.heading1,
            actions.heading2,
            actions.insertOrderedList,
            actions.insertBulletsList,
            actions.insertLink,
            actions.undo,
            actions.redo,
            actions.table,
            actions.setTitleFocusHandler,
            actions.code,
            // actions.setBackgroundColor,
            actions.alignCenter,
            actions.alignFull,
            actions.alignLeft,
            actions.alignRight,
            // actions.setParagraph,
            // actions.setTextColor,
            actions.setStrikethrough,
          ]}
          iconMap={{ [actions.heading1]: handleHead }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#494C5F",
            borderRadius: 99,
            marginBottom: 20,
            padding: 2,
            color: "white",
          }}
          iconTint={"white"}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PellRichEditor;
