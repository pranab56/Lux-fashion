import React from "react";
import NoteContext from "./NoteContext";

const NoteStates=(props)=>{
    <NoteContext.Provider value={props.product}>
        {props.children}
    </NoteContext.Provider>
}

export default NoteStates;