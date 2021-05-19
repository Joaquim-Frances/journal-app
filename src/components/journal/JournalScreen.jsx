import React from "react";
import { NoteScreen } from "../notes/NoteScreen";
// import { NothingSelected } from "./NothingSelected";
import { SiderBar } from "./SiderBar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <SiderBar />

      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};
