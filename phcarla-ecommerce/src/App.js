import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CardApp from "./components/CardApp";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hi, I'm Carla. I invite you to take a look at the website"} />
      <CardApp />
      <Footer />
    </div>
  );
}

export default App;
