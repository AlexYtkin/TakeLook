import React from "react";
import Header from "./components/ui/molecules/Header";
import Body from "./components/ui/molecules/Body";
import Packed from "./components/containers/Packed";
import Map from "./components/ui/molecules/Map";

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Packed/>
      <Map/>
    </div>
  );
}

export default App;
