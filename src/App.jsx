import { useState } from "react";
import "./index.css";
import Header from "./Header";
import Note from "./Note";
import LastNotes from "./LastNotes";
import Footer from "./Footer";

function App() {

  return (
    <>
      <Header />
      <Note />
      <LastNotes />
      <Footer />
    </>
  );
}

export default App;
