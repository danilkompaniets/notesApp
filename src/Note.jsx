import React from "react";
import { useState } from "react";
import Send from "./assets/paper-plane.png";

const Note = () => {
  const addNote = () => {
    const noteText = document.getElementById("input").value
    
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center py-[200px] gap-3">
        <input
          type="text"
          name="name"
          id="input"
          className="w-[300px] h-[40px] bg-stone-800 rounded-full p-3 text-white outline-none focus:shadow-2xl focus:outline-zinc-500"
          placeholder="Type your note here..."
        />
        <button onClick={addNote} className="rounded-full hover:bg-zinc-100 p-3 flex justify-center items-center transition duration-150 active:shadow-inner">
          <img className="w-[26px] h-[26px] text-center" src={Send} alt="" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-2xl">Your previous notes</h2>
        
      </div>
    </>
  );
};

export default Note;
