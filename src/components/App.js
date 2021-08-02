import React from "react";
import Header from "./Header";
import Photo from "./Photo";

function App() {
  return (
    <div>
      <Header /> <Photo img={"/profile-photo.jpeg"} />
    </div>
  );
}

export default App;
