import { useState } from "react";
import "./index.css";
import Header from "./Header";
import Note from "./Note";
import LastNotes from "./LastNotes";
import Footer from "./Footer";

function App() {
  return (
    <div className="background">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
