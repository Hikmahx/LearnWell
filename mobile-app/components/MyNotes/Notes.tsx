import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "../../lib/tailwind";
import NoteWrapper from "./NoteWrapper";
import { notes } from "../../notes.json";

const Notes = () => {
  return (
    <View>
      <View style={tw`w-full items-end pt-12`}>
        <Svg
          style={tw`mb-4`}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <Path
            d="M8.66663 13H17.3333"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M13 17.3334V8.66675"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M16.25 23.8334C21.6666 23.8334 23.8333 21.6667 23.8333 16.2501V9.75008C23.8333 4.33341 21.6666 2.16675 16.25 2.16675H9.74996C4.33329 2.16675 2.16663 4.33341 2.16663 9.75008V16.2501C2.16663 21.6667 4.33329 23.8334 9.74996 23.8334H16.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            opacity="0.01"
            d="M25.5 0.5V25.5H0.5V0.5H25.5Z"
            stroke="black"
          />
        </Svg>
      </View>

      {notes.map((note: any) => (
        <React.Fragment key={note.title}>
          <NoteWrapper
            noteColor={note.noteColor}
            summary={note.summary}
            title={note.title}
            category={note.category}
            subject={note.subject}
            date={note.date}
          />
        </React.Fragment>
      ))}
      {/* <NoteWrapper
            noteColor={"#000"}
            summary={
              "Mitosis is cell division in somatic cells, producing genetically identical daughter cells. Meiosis occurs in gamete cells, producing genetically diverse daughter cells through..."
            }
            title={"Mitosis and Meiosis"}
            category={"Science"}
            subject={"Biology"}
            date={"20/02/2021"}
          /> */}
    </View>
  );
};

export default Notes;
